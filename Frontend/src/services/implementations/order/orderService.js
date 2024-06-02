import { api } from "../../axios";


export const GetOrderByUserId = (id) => {
  return api.get("/orders/user/" + id);
};

export const GetAllOrders = () => {
  return api.get("/orders", {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxIiwiZ2l2ZW5fbmFtZSI6IkVsaWFzIiwiRW1haWwiOiJ1c3VhcmlvMUBnbWFpbC5jb20iLCJyb2xlIjoiQWRtaW4iLCJuYmYiOjE3MTU1NTQ4MTYsImV4cCI6MTcxNTU1NDgxNywiaXNzIjoibG9jYWxob3N0Ojc0MTQiLCJhdWQiOiJmdXJuaXR1cmVTdG9yZUFwaSJ9.Xp5Vn6wK6Od51NyzHQ3tCMvIxRwu66J1gogqEUVEu6k`,
    },
  });
};
