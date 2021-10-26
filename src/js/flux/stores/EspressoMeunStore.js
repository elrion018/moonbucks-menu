import Store from "../../cores/Store.js";

export default class EspressoMenuStore extends Store {
  constructor() {
    super();

    this.setData({
      menu: [],
      menuId: 0,
      inputValue: "",
    });
  }
}
