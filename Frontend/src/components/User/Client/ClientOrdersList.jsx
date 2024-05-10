//esto es solo una plantilla para hacer la lista o historial de ordenes del cliente
// HAY QUE HACER UN SERVICIO PARA TRAER LAS ORDENES POR SU ID DE USUARIO (el usuario que realizo esas ordenes)
// AUTORIZAR EL SERVICIO DESDE EL BACK PARA CLIENTES PUEDAN VER SUS PRDENES
// import { useEffect, useState } from "react";
// import { GetOrderByUserId } from "../../../services/order/orderService";

const orders = [
  { Id: 1, UserId: 123 },
  { Id: 2, UserId: 321 },
  { Id: 3, UserId: 322 },
];

export default function ClientOrdersList() {
  //   const [orders, setOrders] = useState();

  //   useEffect(() => {
  //     GetOrderByUserId().then((res) => {
  //       setOrders(res.data);
  //     });
  //   }, []);

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
