import { useEffect, useState } from "react";
import { GetAllOrders } from "../../../services/order/orderService";
import { Loader } from "../../shared/Loader";
import OrderDetail from "../OrderDetail";

export default function OrdersList() {
  const [orders, setOrders] = useState();

  useEffect(() => {
    GetAllOrders().then((res) => {
      setOrders(res.data);
      console.log(res);
    });
  }, []);
  if (orders == null) {
    return <Loader />;
  }

  return (
    <ul role="list" className="divide-y divide-gray-600">
      <h5>Detalles de la orden</h5>
      {orders.map((order) => (
        <li key={order.id} className="flex justify-start gap-x-6 py-5">
          <div className="flex-col min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Numero de orden
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {order.id}
              </p>
            </div>
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Datos del usuario de orden
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                Id: {order.userId}
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                (falta email y nombre)
              </p>
            </div>
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Fecha
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {order.orderDate}
              </p>
            </div>
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Cantidad de productos
              </p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                {order.orderDetails.length}
              </p>
            </div>
            <div className="min-w-0 flex-auto">
              <p className="text-xl font-semibold leading-6 text-gray-900">
                Total
              </p>
              <p className="mt-1 truncate text-xl leading-5 text-gray-500">
                $ {order.total}
              </p>
            </div>
          </div>
          <div className="min-w-0 flex flex-col">
            {order.orderDetails?.map((details) => (
              <OrderDetail
                key={details.id}
                price={details.price}
                quantity={details.quantity}
              />
            ))}
          </div>
        </li>
      ))}
    </ul>
  );
}
