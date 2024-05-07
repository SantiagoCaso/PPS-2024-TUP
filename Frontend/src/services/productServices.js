import { api } from "./axios";

export const GetAllProducts = () => {
  return api.get("/products");
};

export const GetProductById = (id) => {
  return api.get("/products/" + id);
};

export const GetUserById = (id) => {
  return api.get("/users/" + id);
};
