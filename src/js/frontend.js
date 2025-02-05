import Alpine from 'alpinejs';
import { OverlayScrollbars, ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin } from 'overlayscrollbars';
import Inputmask from "inputmask";
import { computePosition, autoUpdate, flip, offset } from "@floating-ui/dom";

window.Alpine = Alpine;
window.OverlayScrollbars = OverlayScrollbars;

OverlayScrollbars.plugin([ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin]);

// START IMPLEMENTATION
Alpine.data('app', () => ({
    themedark: localStorage.getItem('theme-dark') === 'true',
    themeSidebar: localStorage.getItem('theme-sidebar') === 'true',
    toggleThemeDark() {
        this.themedark = !this.themedark;
        localStorage.setItem('theme-dark', this.themedark);
    },
    toggleSidebar() {
        this.themeSidebar = !this.themeSidebar;
        localStorage.setItem('theme-sidebar', this.themeSidebar);
    },
    closeSidebarMobile() {
        let sidebar = this.$el;

        if (sidebar === this.$event.target) {
            this.themeSidebar = false;
        }
    }
}));
// END IMPLEMENTATION

Alpine.start();