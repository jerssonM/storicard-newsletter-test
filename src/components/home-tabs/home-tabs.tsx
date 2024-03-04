"use client";
import { Tabs, Tab } from "@nextui-org/tabs";

import { User } from "@/lib/services/models";
import { UsersTable } from "@/components/users-table/users-table";
import { NewsletterFormContainer } from "@/containers/newletter-form-container/newsletter-form-container";
import { SubscribeFormContainer } from "@/containers/subscribe-form-container/subscribe-form-container";

interface HomeTabsProps {
  users: User[];
}

export default function HomeTabs({ users }: HomeTabsProps) {
  return (
    <Tabs>
      <Tab key="users" title="Users" className="w-full">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 mt-10">
          <UsersTable data={users} />
          <SubscribeFormContainer />
        </div>
      </Tab>
      <Tab key="newsletter" title="Newsletter" className="w-full">
        <div className="mt-10">
          <NewsletterFormContainer />
        </div>
      </Tab>
    </Tabs>
  );
}
