import { api } from "../../axios";


export const GetOrderByUserId = (id) => {
  return api.get("/orders/user/" + id);
};

export const GetAllOrders = (token) => {
  return api.get("/orders", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
