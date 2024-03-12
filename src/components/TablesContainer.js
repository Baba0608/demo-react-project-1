const tables = ["Table 1", "Table 2", "Table 3"];

import { Table } from "./Table";

export const TablesContainer = ({ orders, removeFromOrders }) => {
  return (
    <div>
      {tables.map((table, index) => (
        <Table
          table={table}
          tableOrders={orders[index]}
          key={table}
          removeFromOrders={removeFromOrders}
        />
      ))}
    </div>
  );
};
