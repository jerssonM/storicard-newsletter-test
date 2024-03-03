import { axiosInstance } from "./axios-instance";
import { User } from "./models";

export const getUsers = async (): Promise<User[]> => {
  const { data: response } = await axiosInstance.get<User[]>("users");
  if (!response) {
    return [];
  }

  return response;
};
