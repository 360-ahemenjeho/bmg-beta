import { MonthlyBarChart } from "@/components/shared";
import { Card } from "@/components/ui/primitives";
import { CardContent } from "@mui/material";

export default function MonthlyTransactions() {
  const monthlyData = [
    { label: "Jan", value: 12000 },
    { label: "Feb", value: 12000 },
    { label: "Mar", value: 12000 },
    { label: "Apr", value: 12000 },
    { label: "May", value: 12000 },
    { label: "Jun", value: 12000 },
    { label: "Jul", value: 12000 },
    { label: "Aug", value: 12000 },
    { label: "Sep", value: 12000 },
    { label: "Oct", value: 12000 },
    { label: "Nov", value: 12000 },
    { label: "Dec", value: 12000 },
  ];

  return (
    <Card round="8">
      <CardContent></CardContent>
    </Card>
  );
}
