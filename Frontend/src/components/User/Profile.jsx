export const Profile = () => {
  return (
    <div className="space-y-12 border-4 border-black border-solid p-[10px] rounded-lg m-5 w-screen h-screen">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Perfil
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Información personal
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Nombre Completo
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Name input
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
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
  );
};
