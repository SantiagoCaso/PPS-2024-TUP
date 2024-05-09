import { useEffect, useRef, useState } from "react";
import { GetUserById } from "../../services/productServices";
import { useParams } from "react-router-dom";
import { Loader } from "../shared/Loader";
import { Toaster, toast } from "sonner";

export const Profile = () => {
  const [data, setData] = useState(null);
  const { userId } = useParams();
  const [isEditing, setIsEditing] = useState(false);
  const focusName = useRef(null);
  const focusEmail = useRef(null);

  const handleEdit = (e) => {
    e.preventDefault();
    setIsEditing(true);
    console.log(isEditing);
    focusName.current.focus();
    focusName.current.style.border = "solid black";
    focusName.current.style.borderRadius = "5px";
    focusEmail.current.focus();
    focusEmail.current.style.border = "solid black";
    focusEmail.current.style.borderRadius = "5px";
  };

  const handleSave = (e) => {
    e.preventDefault();
    setIsEditing(false);
    console.log(isEditing);
    focusEmail.current.blur();
    focusEmail.current.style.border = "none";
    focusName.current.blur();
    focusName.current.style.border = "none";
    toast.success("Los datos han sido actualizados");
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsEditing(false);
    console.log(isEditing);
    focusEmail.current.blur();
    focusEmail.current.style.border = "none";
    focusName.current.blur();
    focusName.current.style.border = "none";
    toast.info("Los cambios an sido cancelados");
  };

  useEffect(() => {
    GetUserById(userId).then((res) => {
      setData(res.data);
    });
  }, []);
  if (data == null) {
    return <Loader />;
  }
  return (
    <>
      <form className="space-y-12 border-4 border-black border-solid p-[10px] rounded-lg m-5 h-full ">
        <input
          disabled={!isEditing}
          className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0 m-1"
          type="text"
          name="nombre"
          defaultValue={data.username}
          ref={focusName}
        />
        <input
          disabled={!isEditing}
          className="mt-1 text-xl leading-6 text-gray-700 sm:col-span-2 sm:mt-0 m-1"
          type="email"
          defaultValue={data.email}
          ref={focusEmail}
        />
        <div className="grid grid-flow-row grid-cols-4">
          {isEditing ? (
            <>
              <button
                type="button"
                className="m-1 rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleSave}
              >
                Guardar
              </button>
              <button
                type=""
                className="m-1 rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={handleCancel}
              >
                Cancelar
              </button>
            </>
          ) : (
            <button
              type=""
              className="m-1 rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleEdit}
            >
              Cambiar datos
            </button>
          )}
        </div>
      </form>
      <Toaster richColors position="top-center" />
    </>
  );
};
