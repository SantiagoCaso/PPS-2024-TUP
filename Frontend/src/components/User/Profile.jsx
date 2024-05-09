import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../shared/Loader";
import {GetUserById} from '../../services/user/userService'

export const Profile = () => {
  const [data, setData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    GetUserById(userId).then((res) => {
      setData(res.data);
    });
  }, [userId]);
  if (data == null) {
    return <Loader />;
  }
  return (
    <div className="space-y-12 border-4 border-black border-solid p-[10px] rounded-lg m-5 h-full ">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900 ">
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
            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {data.username}
            </dd>
            <input
              className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0"
              type="text"
              name="nombre"
              placeholder="Nombre"
            />
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Correo electronico
            </dt>
            <dd className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {data.email}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
