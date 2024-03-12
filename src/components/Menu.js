import { useState } from "react";
import { v4 as uuid } from "uuid";

import { TablesContainer } from "./TablesContainer";

export const Menu = () => {
  const [item, setItem] = useState("Chicken Biriyani");
  const [price, setPrice] = useState("");
  const [orderedTable, setOrderedTable] = useState("Table 1");

  const [table1, setTable1] = useState([]);
  const [table2, setTable2] = useState([]);
  const [table3, setTable3] = useState([]);

  const removeFromOrders = (uniqueId) => {
    const t1 = table1.filter((order) => {
      return order.uniqueId != uniqueId;
    });
    setTable1(t1);

    const t2 = table2.filter((order) => {
      return order.uniqueId != uniqueId;
    });
    setTable2(t2);

    const t3 = table3.filter((order) => {
      return order.uniqueId != uniqueId;
    });
    setTable3(t3);
  };

  return (
    <div>
      <div className="p-4 flex">
        <div className="mx-4 my-2">
          <label htmlFor="item">Item: </label>
          <select
            id="item"
            className="border-black border-2 rounded-md"
            onChange={(e) => setItem(e.target.value)}
          >
            <option value={"Chicken Biriyani"}>Chicken Biriyani</option>
            <option value={"Roti"}>Roti</option>
            <option value={"Chicken Curry"}>Chicken Curry</option>
            <option value={"Noodles"}>Noodles</option>
          </select>
        </div>

        <div className="mx-4 my-2">
          <label htmlFor="price">Price: </label>
          <input
            id="price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="text"
            className="border-black border-2 rounded-md px-1"
          />
        </div>

        <div className="mx-4 my-2">
          <label>Table: </label>
          <select
            id="table"
            className="border-black border-2 rounded-md"
            onChange={(e) => setOrderedTable(e.target.value)}
          >
            <option value={"Table 1"}>Table 1</option>
            <option value={"Table 2"}>Table 2</option>
            <option value={"Table 3"}>Table 3</option>
          </select>
        </div>

        <div className="mx-4 my-2">
          <button
            className="bg-blue-300 px-4 py-1 rounded-md hover:bg-blue-400"
            onClick={() => {
              const uniqueId = uuid();
              const obj = { item: item, price: price, uniqueId: uniqueId };
              localStorage.setItem(uniqueId, JSON.stringify(obj));
              if (orderedTable === "Table 1") {
                setTable1([...table1, obj]);
              } else if (orderedTable === "Table 2") {
                setTable2([...table2, obj]);
              } else if (orderedTable === "Table 3") {
                setTable3([...table3, obj]);
              }
            }}
          >
            Add to bill
          </button>
        </div>
      </div>

      <TablesContainer
        orders={[table1, table2, table3]}
        removeFromOrders={removeFromOrders}
      />
    </div>
  );
};
