import ListItem from "./ListItem";

interface List {
  list: ListItem[];
  load(): void;
  save(): void;
  clear(): void;
  addItem(item: ListItem): void;
  removeItem(id: string): void;
}

type StoredList = string | null;
type ParsedList = {
  _id: string;
  _item: string;
  _checked: boolean;
};

class FullList implements List {
  static instance: FullList = new FullList();

  constructor(private _list: ListItem[] = []) {}

  get list(): ListItem[] {
    return this._list;
  }

  load(): void {
    // read from local storage
    const storedList: StoredList = localStorage.getItem("myList");
    if (typeof storedList !== "string") {
      return;
    }

    const parsedList: ParsedList[] = JSON.parse(storedList);
    parsedList.forEach((item: ParsedList) => {
      const newItem = new ListItem(item._id, item._item, item._checked);
      FullList.instance.addItem(newItem);
    });
  }

  save(): void {
    localStorage.setItem("myList", JSON.stringify(this._list));
  }

  clear(): void {
    this._list = [];
    this.save();
  }

  addItem(item: ListItem): void {
    this._list.push(item);
    this.save();
  }

  removeItem(id: string): void {
    this._list = this._list.filter(item => item.id !== id);
    this.save();
  }
}

export default FullList;
