export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

class ListItem implements Item {
  /**
   *
   */
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _checked: boolean = false
  ) {}

  get id(): string {
    return this._id;
  }
  set id(id: string) {
    this._id = id;
  }

  get item(): string {
    return this._item;
  }
  set item(item: string) {
    this._item = item;
  }

  get checked(): boolean {
    return this._checked;
  }
  set checked(check: boolean) {
    this._checked = check;
  }
}

export default ListItem;
