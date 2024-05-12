export default function OrderDetail({ name, price, quantity }) {
  return (
    <ul role="list" className="divide-y divide-y-reverse divide-gray-200">
      <h5 className="pt-4">Detalles de productos</h5>
      <li className="flex justify-start gap-x-6 py-3">
        <div className="flex justify-start  min-w-0 gap-x-4">
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              Producto
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              {name}
            </p>
          </div>

          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              Cantidad
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              {quantity}
            </p>
          </div>
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              Precio unitario
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              $ {price}
            </p>
          </div>
          <div className="min-w-0 flex-auto">
            <p className="text-sm font-semibold leading-6 text-gray-900">
              Total
            </p>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              $ {price * quantity}
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
}
