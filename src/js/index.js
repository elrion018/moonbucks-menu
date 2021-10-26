import App from "./App.js";
import Store from "./cores/Store.js";

const app = document.querySelector("#app");
const store = new Store();

new App(app, store, null);
