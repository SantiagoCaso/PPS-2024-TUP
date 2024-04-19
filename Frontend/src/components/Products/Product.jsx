export default function Product() {
  return (
    <>
      <div className="bg-gray-100 ">
        {/* Remove py-8 */}
        <div className="mx-auto container py-8">
          <div className="flex flex-wrap items-center lg:justify-between justify-center">
            {/* Card 1 */}
            <div className="mx-2 w-72 lg:mb-0 mb-8 border-black border-solid border-4 rounded">
              <div>
                <img
                  src="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                  className="w-full h-44"
                />
              </div>
              <div className="bg-white ">
                <div className="p-4">
                  <div className="flex items-center">
                    <h2 className="text-lg font-semibold">
                      Nombre del producto
                    </h2>
                    <p className="text-xs text-gray-600 pl-5">Dto adicional</p>
                  </div>
                  <p className="text-xs text-gray-600 mt-2">Descripción</p>
                  <p className="text-xs text-gray-600 mt-2">Descripción</p>
                  <p className="text-xs text-gray-600 mt-2">Descripción</p>
                  <div className="flex mt-4">
                    <div>
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                        Categoria del producto
                      </p>
                    </div>
                    <div className="pl-2">
                      <p className="text-xs text-gray-600 px-2 bg-gray-200 py-1">
                        Stock (Available)
                      </p>
                    </div>
                  </div>
                  <div className=" flex-row-reverse  py-4">
                    <h3 className="text-indigo-700 text-xl font-semibold">
                      $Precio
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 1 Ends */}
          </div>
        </div>
      </div>
    </>
  );
}
