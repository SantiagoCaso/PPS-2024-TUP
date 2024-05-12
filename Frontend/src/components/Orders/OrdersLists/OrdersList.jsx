import { useEffect, useState } from "react";
import { GetAllOrders } from "../../../services/order/orderService";
import { Loader } from "../../shared/Loader";

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
  // 401 necesitamos el token de autorización para ver todos los productos
  return (
    <ul role="list" className="divide-y divide-gray-600">
      {orders.map((order) => (
        <li key={order.Id} className="flex justify-between gap-x-6 py-5">
          <div className="flex-col min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Numero de orden
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {order.Id}
              </p>
            </div>
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Id de usuario de orden
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {order.UserId}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
