import { api } from "./axios";

export const GetAllProducts = () => {


  
  return api.get("/products");
};
