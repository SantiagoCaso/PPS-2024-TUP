import OrdersList from "../../Orders/OrdersLists/OrdersList";

const AdminProfile = () => {
  return (
    <>
      <div className="space-y-12 border-4 border-black border-solid p-[10px] rounded-lg m-5">
        <div className="px-4 sm:px-0 ">
          <h3 className="text-base font-semibold leading-7 text-gray-900">
            Perfil Administrador
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Información personal administrador
          </p>
        </div>
        <div className="mt-6 border-t border-gray-100">
          <dl className="divide-y divide-gray-100  border-black border-solid">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Nombre Completo
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Name input
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0 ">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Correo electronico
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                @example.com
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="space-y-12 border-b border-black border-solid">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Agregar productos
        </h3>
      </div>
      <div className="space-y-12 border-b border-black border-solid">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Lista de pedidos
        </h3>
        <OrdersList />
      </div>
    </>
  );
};

export default AdminProfile;
