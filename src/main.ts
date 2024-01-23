import { createApp } from "vue";
import "./styles.css";
import App from "./App.vue";

createApp(App).mount("#app");

import { appWindow } from '@tauri-apps/api/window'
window.document.getElementById('titlebar-minimize')?.addEventListener('click', () => appWindow.minimize())
window.document.getElementById('titlebar-maximize')?.addEventListener('click', () => appWindow.toggleMaximize())
window.document.getElementById('titlebar-close')?.addEventListener('click', () => appWindow.close())

  