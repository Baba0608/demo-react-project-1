export const Orders = ({ tableOrders, dispatchTableOrders, table }) => {
  return (
    <div>
      {tableOrders.map((order) => (
        <div key={order.uniqueId} className="ml-10 flex my-1">
          <div className="mx-2">{order.item + " - "}</div>
          <div>{order.price}</div>
          <button
            className="bg-gray-300 rounded-md px-2 mx-2"
            onClick={() => {
              localStorage.removeItem(order.uniqueId);
              dispatchTableOrders({
                type: "remove-order",
                table: table,
                payload: { id: order.uniqueId },
              });
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};
