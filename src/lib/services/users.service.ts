import { User } from "./models";

export const getUsers = async (): Promise<User[]> => {
  const request = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {
    cache: "no-cache",
    next: { revalidate: 100 },
  });
  const response = await request.json();

  if (!response) {
    return [];
  }

  return response;
};
