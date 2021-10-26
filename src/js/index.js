import App from "./App.js";
import MenuStore from "./flux/stores/MeunStore.js";

const app = document.querySelector("#app");
const menuStore = new MenuStore();

new App(app, menuStore, null);
