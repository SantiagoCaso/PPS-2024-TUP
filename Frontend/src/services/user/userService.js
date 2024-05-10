import { api } from "./../axios";

export const GetUserById = (id) => {
  return api.get("/users/" + id);
};

export const UpdateUsername = (id, newName) => {
  return api.put("/users/" + id, { name: newName });
};
