import { api } from "./../axios";

export const GetUserById = (id) => {
  return api.get("/users/" + id);
};

export const SignInUser = (email, password) => {
  return api.post("/users/authenticate/", {
    email: email,
    password: password,
  });
};
