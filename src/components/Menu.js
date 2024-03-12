import { useState, useReducer } from "react";
import { v4 as uuid } from "uuid";

import { TablesContainer } from "./TablesContainer";

function reducer(state, action) {
  switch (action.type) {
    case "add-order":
      return {
        ...state,
        [action.table]: [...state[action.table], action.payload.obj],
      };

    case "remove-order":
      const filteredOrders = state[action.table].filter(
        (order) => order.uniqueId != action.payload.id
      );

      return {
        ...state,
        [action.table]: filteredOrders,
      };

    default:
      return state;
  }
}

export const Menu = () => {
  const [item, setItem] = useState("Chicken Biriyani");
  const [price, setPrice] = useState("");
  const [orderedTable, setOrderedTable] = useState("Table 1");

  const [tableOrders, dispatchTableOrders] = useReducer(reducer, {
    "Table 1": [],
    "Table 2": [],
    "Table 3": [],
  });

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
            value={price}
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
            onClick={(e) => {
              e.preventDefault();
              const uniqueId = uuid();
              const obj = { item: item, price: price, uniqueId: uniqueId };
              localStorage.setItem(uniqueId, JSON.stringify(obj));
              dispatchTableOrders({
                type: "add-order",
                table: orderedTable,
                payload: { obj: obj },
              });
              setPrice("");
            }}
          >
            Add to bill
          </button>
        </div>
      </div>

      <TablesContainer
        orders={tableOrders}
        dispatchTableOrders={dispatchTableOrders}
      />
    </div>
  );
};
