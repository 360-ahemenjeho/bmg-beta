import { Chip, Table, TableBody, TableHead } from "@/components/ui/primitives";
import {
  CalendarClockRegular,
  CircleRegular,
  CircleSmallFilled,
  DiversityRegular,
  DocumentRegular,
  MoneyRegular,
  PersonRegular,
  SquareRegular,
} from "@fluentui/react-icons";
import { TableCell, TableRow } from "@mui/material";
import { statusColor } from "./data";

const orders = [
  {
    id: "4YBJ6",
    subject: "Logo",
    description: "Landing Page",
    dueDate: "Today",
    amount: "GHS 700",
    expert: "Peter Pan",
    status: "pending",
  },
  {
    id: "9B112",
    subject: "Logo",
    description: "Landing Page",
    dueDate: "Today",
    amount: "GHS 700",
    expert: "Juliet Romeo",
    status: "completed",
  },
  {
    id: "5KD88",
    subject: "Logo",
    description: "Landing Page",
    dueDate: "Today",
    amount: "GHS 700",
    expert: "Viju Mike",
    status: "cancelled",
  },
  {
    id: "7MN45",
    subject: "Website Design",
    description: "E-commerce Site",
    dueDate: "Tomorrow",
    amount: "GHS 1500",
    expert: "Sarah Johnson",
    status: "pending",
  },
  {
    id: "3PQ12",
    subject: "Mobile App",
    description: "iOS App",
    dueDate: "Next Week",
    amount: "GHS 2000",
    expert: "Ahmed Hassan",
    status: "cancelled",
  },
  {
    id: "8RS67",
    subject: "Branding",
    description: "Brand Guidelines",
    dueDate: "Next Week",
    amount: "GHS 900",
    expert: "Maria Garcia",
    status: "completed",
  },
];

const columns = [
  { label: "", icon: SquareRegular },
  { label: "ID" },
  { label: "Subject", icon: DocumentRegular },
  { label: "Description", icon: DiversityRegular },
  { label: "Due Date", icon: CalendarClockRegular },
  { label: "Amount", icon: MoneyRegular },
  { label: "Expert", icon: PersonRegular },
  { label: "Status", icon: CircleRegular },
];

export default function Orders() {
  return (
    <Table>
      <TableHead columns={columns}></TableHead>
      <TableBody loading={false} count={orders?.length} span={columns.length}>
        {orders.map((row) => (
          <TableRow key={row.id}>
            <TableCell>
              <SquareRegular />
            </TableCell>
            <TableCell>{row.id}</TableCell>
            <TableCell>{row.subject}</TableCell>
            <TableCell>{row.description}</TableCell>
            <TableCell>{row.dueDate}</TableCell>
            <TableCell>{row.amount}</TableCell>
            <TableCell>{row.expert}</TableCell>
            <TableCell>
              <Chip
                label={row.status}
                color={statusColor[row.status]}
                icon={<CircleSmallFilled />}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
