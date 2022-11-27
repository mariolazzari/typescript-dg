import "./css/style.css";
import FullList from "./model/FullList";
import ListItem from "./model/ListItem";
import ListTemplate from "./templates/ListTemplate";

const initApp = () => {
  const fullList = FullList.instance;
  const template = ListTemplate.instance;

  // form
  const itemEntryForm = document.getElementById(
    "itemEntryForm"
  ) as HTMLFormElement;

  // on form sibmit event handler
  itemEntryForm.addEventListener("submit", (e: SubmitEvent): void => {
    e.preventDefault();

    // text
    const input = document.getElementById("newItem") as HTMLInputElement;
    const newEntryTest = input.value.trim();
    if (!newEntryTest.length) {
      return;
    }

    // compute new item id
    const itemId = fullList.list.length
      ? +fullList.list[fullList.list.length - 1].id + 1
      : 1;

    // create new item and update list
    const newItem = new ListItem(itemId.toString(), newEntryTest);
    fullList.addItem(newItem);
    template.render(fullList);
  });

  // clear items button
  const clearItems = document.getElementById(
    "clearItemsButton"
  ) as HTMLButtonElement;
  clearItems.addEventListener("click", () => {
    fullList.clear();
    template.clear();
  });

  fullList.load();
  template.render(fullList);
};

document.addEventListener("DOMContentLoaded", initApp);
