import Alpine from 'alpinejs';
import { OverlayScrollbars, ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin } from 'overlayscrollbars';
import Inputmask from "inputmask";
import { computePosition, autoUpdate, flip, offset } from "@floating-ui/dom";

window.Alpine = Alpine;
window.OverlayScrollbars = OverlayScrollbars;

OverlayScrollbars.plugin([ScrollbarsHidingPlugin, SizeObserverPlugin, ClickScrollPlugin]);

// START IMPLEMENTATION
Alpine.data('app', () => ({
    darkMode: localStorage.getItem('theme-dark') === 'true',
    compactSide: localStorage.getItem('compact-side') === 'true',
    toggleThemeDark() {
        this.darkMode = !this.darkMode;
        localStorage.setItem('theme-dark', this.darkMode);
    },
    toggleCompactSide() {
        this.compactSide = !this.compactSide;
        localStorage.setItem('compact-side', this.compactSide);
    },
}));
// END IMPLEMENTATION

Alpine.start();