import { ActionButton } from "@/components/shared";
import {
  Avatar,
  Button,
  Checkbox,
  Chip,
  FilterField,
  FilterMenu,
  SearchBar,
  Table,
  TableBody,
  TableHead,
} from "@/components/ui";
import { TASK_PRIORITY_VARIANT, TASK_STATUS_VARIANT } from "@/constants/lib";
import { spacingTokens } from "@/constants/theme";
import { renderDateTime } from "@/helpers/date";
import { renderText } from "@/helpers/text";
import {
  CheckboxCheckedRegular,
  NumberSymbolRegular,
  TaskListSquareLtrRegular,
  PersonRegular,
  RecordRegular,
  FlagRegular,
  CalendarDateRegular,
  FolderRegular,
  ClockAlarmRegular,
  CircleSmallFilled,
  CircleRegular,
} from "@fluentui/react-icons";
import { Stack, TableCell, TableRow } from "@mui/material";

const tasks = [
  {
    id: "#5FGH9",
    subject: "Finish UI for dashboard",
    description:
      "Complete the remaining UI components for the analytics dashboard, including charts, filters, and responsive layout.",
    assigneeName: "Sarah Kim",
    createdBy: "Fatima Hassan",
    status: "in-progress",
    priority: "high",
    category: "frontend",
    tags: ["dashboard", "ui", "sprint-4"],
    dueDate: "2026-02-20",
    time: "09:40",
    reminder: "18:30",
    createdAt: "2026-02-15T08:00:00Z",
    updatedAt: "2026-02-20T09:40:00Z",
    completedAt: null,
  },
  {
    id: "#5FGH9",
    subject: "Prepare backend API docs",
    description:
      "Write and publish comprehensive API documentation for all backend endpoints using Swagger/OpenAPI.",
    assigneeName: "Daniel Okafor",
    createdBy: "Fatima Hassan",
    status: "done",
    priority: "medium",
    category: "backend",
    tags: ["docs", "api", "sprint-4"],
    dueDate: "2026-02-19",
    time: "14:00",
    reminder: null,
    createdAt: "2026-02-14T10:00:00Z",
    updatedAt: "2026-02-19T13:45:00Z",
    completedAt: "2026-02-19T13:45:00Z",
  },
  {
    id: "#5FGH9",
    subject: "Team standup meeting",
    description: "Daily standup to sync on blockers, progress updates, and priorities for the day.",
    assigneeName: "Mia Chen",
    createdBy: "Mia Chen",
    status: "to-do",
    priority: "medium",
    category: "meeting",
    tags: ["standup", "team", "recurring"],
    dueDate: "2026-02-21",
    time: "10:00",
    reminder: "7:18",
    createdAt: "2026-02-20T07:00:00Z",
    updatedAt: "2026-02-20T07:00:00Z",
    completedAt: null,
  },
  {
    id: "#5FGH9",
    subject: "Refactor auth flow",
    description:
      "Refactor the authentication flow to support OAuth 2.0 and clean up legacy session handling code.",
    assigneeName: "Alex Johnson",
    createdBy: "Daniel Okafor",
    status: "to-do",
    priority: "high",
    category: "backend",
    tags: ["auth", "refactor", "security", "sprint-5"],
    dueDate: "2026-03-05",
    time: "16:30",
    reminder: null,
    createdAt: "2026-02-18T09:00:00Z",
    updatedAt: "2026-02-18T09:00:00Z",
    completedAt: null,
  },
  {
    id: "#5FGH9",
    subject: "Buy groceries",
    description: "Pick up weekly groceries including fruits, vegetables, and pantry staples.",
    assigneeName: "Chinedu Adebayo",
    createdBy: "Chinedu Adebayo",
    status: "done",
    priority: "low",
    category: "personal",
    tags: ["errands", "personal"],
    dueDate: "2026-03-05",
    time: null,
    reminder: "6:21",
    createdAt: "2026-02-19T20:00:00Z",
    updatedAt: "2026-03-05T11:30:00Z",
    completedAt: "2026-03-05T11:30:00Z",
  },
  {
    id: "#5FGH9",
    subject: "Push hotfix to production",
    description:
      "Deploy the critical hotfix addressing the payment processing bug affecting users on checkout.",
    assigneeName: "Nina Patel",
    createdBy: "Alex Johnson",
    status: "in-progress",
    priority: "urgent",
    category: "devops",
    tags: ["hotfix", "production", "critical"],
    dueDate: null,
    time: "23:15",
    reminder: null,
    createdAt: "2026-02-20T22:00:00Z",
    updatedAt: "2026-02-20T23:00:00Z",
    completedAt: null,
  },
  {
    id: "#5FGH9",
    subject: "Read neuroscience paper",
    description:
      "Read and summarize the latest paper on neuroplasticity and its implications for cognitive training.",
    assigneeName: "Liam Carter",
    createdBy: "Liam Carter",
    status: "overdue",
    priority: "low",
    category: "personal",
    tags: ["reading", "research", "personal"],
    dueDate: "2026-02-18",
    time: null,
    reminder: null,
    createdAt: "2026-02-10T18:00:00Z",
    updatedAt: "2026-02-10T18:00:00Z",
    completedAt: null,
  },
  {
    id: "#5FGH9",
    subject: "Plan next sprint",
    description:
      "Organize and prioritize the backlog, assign tasks, set sprint goals, and prepare the sprint board for the upcoming cycle.",
    assigneeName: "Fatima Hassan",
    createdBy: "Fatima Hassan",
    status: "to-do",
    priority: "high",
    category: "management",
    tags: ["sprint", "planning", "team"],
    dueDate: "2026-03-05",
    time: null,
    reminder: "19:59",
    createdAt: "2026-02-20T09:00:00Z",
    updatedAt: "2026-02-20T09:00:00Z",
    completedAt: null,
  },
  {
    id: "#5FGH9",
    subject: "Just a plain task with nothing",
    description: null,
    assigneeName: "Jay",
    createdBy: "Jay",
    status: "to-do",
    priority: "low",
    category: "general",
    tags: [],
    dueDate: null,
    time: null,
    reminder: null,
    createdAt: "2026-02-20T00:00:00Z",
    updatedAt: "2026-02-20T00:00:00Z",
    completedAt: null,
  },
];

/** @type {Array<import("@/types/global.d").TableColumn>} */
const columns = [
  { label: "", icon: CheckboxCheckedRegular },
  { label: "ID", icon: NumberSymbolRegular },
  { label: "Subject", icon: TaskListSquareLtrRegular },
  { label: "Assignee", icon: PersonRegular },
  { label: "Status", icon: RecordRegular },
  { label: "Priority", icon: FlagRegular },
  { label: "Due Date", icon: CalendarDateRegular },
  { label: "Reminder", icon: ClockAlarmRegular },
  { label: "Category", icon: FolderRegular },
  // { label: "Tags", icon: TagRegular },
  // { label: "Description", icon: NotepadRegular },
  { label: "", icon: CircleRegular, align: "right" },
];

export default function TasksPage() {
  return (
    <Stack gap={spacingTokens.xl}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" gap={spacingTokens.sm}>
          <SearchBar></SearchBar>
          <FilterField />
          <FilterMenu
            label={{ icon: PersonRegular, label: "User", accent: "#0078D4" }}
            value=""
            onChange={() => console.log("Opps!")}
          />
        </Stack>
        <Button>Add Task</Button>
      </Stack>
      <Table>
        <TableHead columns={columns}></TableHead>
        <TableBody loading={false} count={tasks.length} span={columns.length}>
          {tasks.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Checkbox></Checkbox>
              </TableCell>
              <TableCell>{renderText(row.id)}</TableCell>
              <TableCell>{renderText(row.subject)}</TableCell>
              <TableCell>{row.assigneeName && <Avatar name={row.assigneeName}></Avatar>}</TableCell>
              <TableCell>
                <Chip
                  icon={<CircleSmallFilled></CircleSmallFilled>}
                  label={row.status}
                  color={TASK_STATUS_VARIANT[row.status]}
                  variant="outlined"
                />
              </TableCell>
              <TableCell>
                <Chip
                  icon={<CircleSmallFilled></CircleSmallFilled>}
                  label={row.priority}
                  color={TASK_PRIORITY_VARIANT[row.priority]}
                />
              </TableCell>
              <TableCell>{renderDateTime(row.dueDate || "", row.time || "")}</TableCell>
              <TableCell>{renderText(row.reminder)}</TableCell>
              <TableCell>{renderText(row.category)}</TableCell>
              <TableCell align="right">
                <ActionButton variation="delete" onClick={() => console.log("null")}></ActionButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Stack>
  );
}
