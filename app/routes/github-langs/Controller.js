import { Controller } from "cx/ui";
import $ from "jquery";
import { isContext } from "vm";

export default class extends Controller {
  init() {
    super.init();

    $.getJSON(
      "https://api.github.com/search/repositories?q=stars:%3E1+language:" +
        this.store.get("$route.lang") +
        "&sort=stars&order=desc&type=Repositories",
      function(data) {
        this.store.set("$page.github.datalang", data);
      }.bind(this)
    );
  }
}
