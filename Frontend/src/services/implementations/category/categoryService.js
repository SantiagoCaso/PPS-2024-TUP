import { api } from "../../axios";

export const GetCategories = () => {
  return api.get("/productCategory");
};