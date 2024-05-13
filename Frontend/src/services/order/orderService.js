import { api } from "../axios";

export const GetOrderByUserId = (id) => {
  return api.get("/orders/user/" + id);
};

export const GetAllOrders = () => {
  return api.get("/orders", {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZ2l2ZW5fbmFtZSI6IkVsaWFzIiwiRW1haWwiOiJ1c3VhcmlvMUBnbWFpbC5jb20iLCJyb2xlIjoiQWRtaW4iLCJuYmYiOjE3MTU1NTIyMzMsImV4cCI6MTcxNjE1NzAzMywiaXNzIjoibG9jYWxob3N0Ojc0MTQiLCJhdWQiOiJmdXJuaXR1cmVTdG9yZUFwaSJ9.W90Zp1svZNOBgx0q5z5tqcr66fx1F6ZIaMuELTrw5pg`,
    },
  });
};
