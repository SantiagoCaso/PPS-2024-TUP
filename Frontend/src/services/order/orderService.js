import { api } from "../axios";

export const GetOrderByUserId = (id) => {
  return api.get("/orders/user/" + id);
};
