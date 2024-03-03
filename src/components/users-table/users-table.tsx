import { NewsletterStatus, User } from "@/services/models";
import {
  Table,
  TableHeader,
  TableColumn,
  TableRow,
  TableCell,
  TableBody,
} from "@nextui-org/table";
import clsx from "clsx";
import { useMemo } from "react";

interface UsersTableProps {
  data: User[];
}

export function UsersTable({ data }: UsersTableProps) {
  const tableContent = useMemo(
    () =>
      data.map((row) => (
        <TableRow key={row.id}>
          <TableCell>{row.name}</TableCell>
          <TableCell>{row.email}</TableCell>
          <TableCell
            className={clsx({
              "text-green-500":
                row.newsletterStatus === NewsletterStatus.Subscribed,
              "text-red-500":
                row.newsletterStatus === NewsletterStatus.Unsubscribed,
            })}
          >
            {row.newsletterStatus}
          </TableCell>
        </TableRow>
      )),
    [data]
  );

  return (
    <Table fullWidth>
      <TableHeader>
        <TableColumn>Name</TableColumn>
        <TableColumn>Email</TableColumn>
        <TableColumn>Newsletter Status</TableColumn>
      </TableHeader>
      <TableBody emptyContent="No rows to display.">{tableContent}</TableBody>
    </Table>
  );
}
