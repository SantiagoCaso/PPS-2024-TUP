import { api } from "../axios";

export const GetAllProducts = () => {
  return api.get("/products");
};

export const GetProductById = (id) => {
  return api.get("/products/" + id);
};

