import { Controller } from "cx/ui";

export default class extends Controller {
  init() {
    super.init();
    var items = this.store.get("$page.todos");
    // Reset the list to default data if it's empty
    if (!items || !items.length) {
      items = [{ id: 1, text: "Create a demo app", done: true }];
      this.store.set("$page.todos", items);
    }
  }

  onAdd() {
    var items = this.store.get("$page.todos");
    var id = items.reduce((acc, item) => Math.max(acc, item.id), 0) + 1;
    items = items.concat({
      id: id,
      text: this.store.get("$page.text") || `Untitled (${id})`,
      done: false
    });

    this.store.set("$page.todos", items);
    this.store.delete("$page.text");
  }

  onRemove(e, { store }) {
    var id = store.get("$record.id");
    var items = this.store.get("$page.todos");
    this.store.set("$page.todos", items.filter(item => item.id !== id));
  }
}
