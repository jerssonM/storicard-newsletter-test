import { User } from "./models";

export const getUsers = async (): Promise<User[]> => {
  const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {
    cache: "no-store",
  });
  const response = await request.json();
  console.log(response);

  if (!response) {
    return [];
  }

  return response;
};
