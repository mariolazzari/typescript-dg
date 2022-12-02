import { ReactNode } from "react";

interface ListProps<T> {
  item: T[];
  render: (item: T) => ReactNode;
}

const List = () => {
  return <div>List</div>;
};

export default List;
