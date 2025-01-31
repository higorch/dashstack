import Alpine from 'alpinejs';
import { OverlayScrollbars, ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin } from 'overlayscrollbars';
import Inputmask from "inputmask";
import { computePosition, autoUpdate, flip, offset } from "@floating-ui/dom";

window.Alpine = Alpine;
window.OverlayScrollbars = OverlayScrollbars;

OverlayScrollbars.plugin([ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin]);

// START IMPLEMENTATION
Alpine.data('app', () => ({
    openMenuSidebar: true,
    darkMode: localStorage.getItem('theme-dark') === 'true',
    events: {
        ['@menu-side-close.window']() {
            this.openMenuSidebar = false;
        },
        ['@menu-side-open.window']() {
            this.openMenuSidebar = true;
        }
    },
    init() {
        var themeDark = localStorage.getItem('theme-dark') === 'true';
        document.documentElement.classList.toggle('dark', themeDark);
    },
    toggleThemeDark() {
        this.darkMode = !this.darkMode;
        localStorage.setItem('theme-dark', this.darkMode);
    },
}));
// END IMPLEMENTATION

Alpine.start();