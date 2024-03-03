"use client";
import { Tabs, Tab } from "@nextui-org/tabs";

import { User } from "@/services/models";
import { UsersTable } from "@/components/users-table/users-table";
import { NewsletterForm } from "@/components/newsletter-form/newsletter-form";
import { SubscribeForm } from "../subscribe-form/subscribe-form";

interface HomeTabsProps {
  users: User[];
}

export default function HomeTabs({ users }: HomeTabsProps) {
  return (
    <Tabs>
      <Tab key="users" title="Users" className="w-full">
        <div className="grid gap-8 grid-cols-2 mt-10">
          <UsersTable data={users} />
          <SubscribeForm />
        </div>
      </Tab>
      <Tab key="newsletter" title="Newsletter" className="w-full">
        <div className="mt-10">
          <NewsletterForm />
        </div>
      </Tab>
    </Tabs>
  );
}
