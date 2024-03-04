import HomeTabs from "@/components/home-tabs/home-tabs";
import { getUsers } from "@/lib/services/users.service";

export default async function Home() {
  const users = await getUsers();

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <HomeTabs users={[]} />
    </main>
  );
}
