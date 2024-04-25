import { SearchIcon } from "../../icons/SearchIcon";

export const Search = () => {
  return (
    <div className="bg-primaryDark text-light h-10  px-4 rounded-full flex w-full sm:w-1/2 sm:py-0  overflow-hidden sm:max-w-[300px] borderLight ">
      <input
        className=" bg-primaryDark [&::-webkit-search-cancel-button]:hidden outline-none w-full placeholder:text-light placeholder:text-opacity-75 px-2   "
        type="search"
        name="searchProducto"
        id="searchProducto"
        placeholder="Busque un producto"
      />
      <SearchIcon customStyle="w-5" />
    </div>
  );
};
