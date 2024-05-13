import { useEffect, useState } from "react";
import { GetAllOrders } from "../../../services/order/orderService";
import { Loader } from "../../shared/Loader";
import Order from "./Order";

export default function OrdersList() {
  const [orders, setOrders] = useState();

  useEffect(() => {
    GetAllOrders().then((res) => {
      setOrders(res.data);
    });
  }, []);
  if (orders == null) {
    return <Loader />;
  }

  return (
    <ul role="list" className="divide-y divide-gray-600">
      {orders.map((order) => (
        <Order
          key={order.id}
          id={order.id}
          userId={order.userId}
          orderDate={order.orderDate}
          total={order.total}
          orderDetails={order.orderDetails}
        />
      ))}
    </ul>
  );
}
