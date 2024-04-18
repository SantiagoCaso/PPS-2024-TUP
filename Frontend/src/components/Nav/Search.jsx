import { SearchIcon } from "../icons/SearchIcon";

export const Search = () => {
  return (
    <div className="bg-primaryDark text-light h-10  px-4 rounded-full flex w-full desktopSmall:w-1/2 desktopSmall:py-0  overflow-hidden max-w-[500px] borderLight ">
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
