import { Orders } from "./Orders";

export const Table = ({ table, tableOrders, dispatchTableOrders }) => {
  return (
    <div>
      <div className="ml-4 my-2">{table}</div>
      <Orders
        tableOrders={tableOrders}
        dispatchTableOrders={dispatchTableOrders}
        table={table}
      />
    </div>
  );
};
