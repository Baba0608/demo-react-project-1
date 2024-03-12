const tables = ["Table 1", "Table 2", "Table 3"];

import { Table } from "./Table";

export const TablesContainer = ({ orders, dispatchTableOrders }) => {
  return (
    <div>
      {tables.map((table) => (
        <Table
          table={table}
          tableOrders={orders[table]}
          key={table}
          dispatchTableOrders={dispatchTableOrders}
        />
      ))}
    </div>
  );
};
