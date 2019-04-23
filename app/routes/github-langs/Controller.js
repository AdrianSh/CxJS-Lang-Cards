/* import { Controller } from "cx/ui";
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
*/

import { Controller } from "cx/ui";
import axios from "axios";
import "@babel/polyfill";
import { isContext } from "vm";

export default class extends Controller {
  onInit() {
    this.fetchAllRepos();
  }

  async fetchAllRepos() {
    const { data } = await axios.get(
      "https://api.github.com/search/repositories?q=stars:%3E1+language:" +
        this.store.get("$route.lang") +
        "&sort=stars&order=desc&type=Repositories"
    );

    this.store.set("$page.github.datalang", data);
  }
}
