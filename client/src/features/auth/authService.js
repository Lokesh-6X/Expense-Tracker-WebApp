import api from "../../api/axios";

export const loginUser = async (data) => {
  const response = await api.post("users/login", data);
  return response.data;
};

export const registerUser = async (data) => {
  const response = await api.post("users/register", data);
  return response.data;
};

export const getCurrentUser = async () => {
  const response = await api.get("users/current");
  return response.data;
};