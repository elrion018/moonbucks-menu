import App from "./App.js";
import EspressoMenuStore from "./flux/stores/EspressoMeunStore.js";
import EspressoMenuReducer from "./flux/reducers/EspressoMenuReducer.js";

const app = document.querySelector("#app");
const espressoMenuStore = new EspressoMenuStore(new EspressoMenuReducer());

new App(app, espressoMenuStore, null);
