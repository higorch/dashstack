import Alpine from 'alpinejs';
import Choices from 'choices.js';
import { OverlayScrollbars, ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin } from 'overlayscrollbars';
import Inputmask from "inputmask";
import { computePosition, autoUpdate, flip, offset } from "@floating-ui/dom";

window.Alpine = Alpine;
window.Choices = Choices;
window.OverlayScrollbars = OverlayScrollbars;

OverlayScrollbars.plugin([ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin]);

// START IMPLEMENTATION
Alpine.data('app', () => ({
    themedark: localStorage.getItem('theme-dark') === 'true',
    themeSidebar: localStorage.getItem('theme-sidebar') === 'true',
    init() {
        this.activeMenuSidebar();
    },
    toggleThemeDark() {
        this.themedark = !this.themedark;
        localStorage.setItem('theme-dark', this.themedark);
    },
    toggleSidebar() {
        this.themeSidebar = !this.themeSidebar;
        localStorage.setItem('theme-sidebar', this.themeSidebar);
    },
    closeSidebarOverlay() {
        let sidebar = this.$el;
        if (sidebar === this.$event.target) {
            this.themeSidebar = false;
            localStorage.setItem('theme-sidebar', false);
        }
    },
    toggleSubmenu() {
        const button = this.$el;
        const submenu = this.$el.nextElementSibling;

        this.$el.parentElement.classList.toggle('active-submenu');

        if (button && submenu) {
            computePosition(button, submenu, {
                strategy: 'fixed',
                placement: 'right-start',
                middleware: [flip(), offset(10)]
            }).then(({ x, y }) => {
                Object.assign(submenu.style, {
                    top: `${y}px`,
                    left: `${x}px`
                });
            });
        }
    },
    activeMenuSidebar() {
        document.addEventListener("DOMContentLoaded", () => {
            const links = document.querySelectorAll("nav ul li a");
            const currentPage = window.location.pathname.split("/").pop();

            links.forEach(link => {
                const linkPage = link.getAttribute("href");
                if (linkPage === currentPage) {
                    link.closest("li").classList.add("active");
                } else {
                    link.closest("li").classList.remove("active");
                }
            });
        });
    }
}));

Alpine.data('mask', () => ({
    init() {
        Inputmask().mask(this.$el);
    }
}));

Alpine.data('dropdown', (placement = 'left', strategy = 'absolute', distance = 0) => ({
    open: false,
    init() {
        var referenceEl = this.$refs.referenceDropdown;
        var floatingEl = this.$refs.floatingDropdown;
        autoUpdate(referenceEl, floatingEl, () => {
            computePosition(referenceEl, floatingEl, {
                strategy: strategy,
                placement: placement,
                middleware: [flip(), offset(distance)]
            }).then(({ x, y }) => {
                Object.assign(floatingEl.style, {
                    top: `${y}px`,
                    left: `${x}px`
                });
            });
        });
    }
}));

Alpine.data('modal', (ref) => ({
    open: false,
    ref: ref,
    events: {
        ['@open-modal.window']() {
            if (this.$event.detail.ref == this.ref) this.open = true;
        },
        ['@close-modal.window']() {
            if (this.$event.detail.ref == this.ref) this.open = false;
        }
    },
    init() {
        var zIndexCounter = 1000;

        this.$watch('open', (value) => {
            document.body.style.overflow = value ? 'hidden' : 'auto';
            // trigger event on close modal            
            if (value === false) this.$dispatch('closed.' + this.ref);
            // trigger event on open modal
            else if (value === true) this.$dispatch('opened.' + this.ref);
            // calculate z-index automatically
            if (value === true) {
                this.$root.style.zIndex = this.maxZIndex + 1;
            }
        });
    },
    get maxZIndex() {
        var maxZ = 0;
        document.querySelectorAll('*').forEach(el => {
            const zIndex = parseInt(window.getComputedStyle(el).zIndex, 10);
            if (!isNaN(zIndex) && zIndex > maxZ) {
                maxZ = zIndex;
            }
        });
        return maxZ;
    }
}));
// END IMPLEMENTATION

Alpine.start();