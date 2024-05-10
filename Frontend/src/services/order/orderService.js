import { api } from "../axios";

export const GetOrderByUserId = (id) => {
  return api.get("/orders/user/" + id);
};

export const GetAllOrders = () => {
  return api.get("/orders");
};
