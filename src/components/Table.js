import { useEffect, useState } from "react";
import { Orders } from "./Orders";

export const Table = ({ table, tableOrders, removeFromOrders }) => {
  return (
    <div>
      <div className="ml-4 my-2">{table}</div>
      <Orders tableOrders={tableOrders} removeFromOrders={removeFromOrders} />
    </div>
  );
};
