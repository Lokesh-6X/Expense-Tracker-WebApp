import api from "../../api/axios";

export const loginUser = async (data) => {
  const response = await api.post("users/login", data);
  return response.data;
};