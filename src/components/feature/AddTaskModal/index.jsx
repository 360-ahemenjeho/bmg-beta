import { Button, TriggerButton } from "@/components/ui";
import { spacingTokens } from "@/constants/theme";
import { ModalLayout } from "@/layouts";
import {
  AddRegular,
  AttachRegular,
  CalendarRegular,
  ClockAlarmRegular,
  FlagRegular,
  PersonRegular,
} from "@fluentui/react-icons";
import { OutlinedInput, Stack } from "@mui/material";

/**
 * @param {import("@/types/global.d").ModalConfig} props
 */
export default function AddTaskModal({ open, onClose }) {
  return (
    <ModalLayout
      open={open}
      onClose={onClose}
      title="Task"
      actionSlot={
        <>
          <Button size="small" startContent={<AttachRegular />} color="secondary">
            Attatch
          </Button>
          <Button size="small" startContent={<AddRegular />}>
            Submit
          </Button>
        </>
      }
    >
      <Stack gap={spacingTokens.sm}>
        <OutlinedInput placeholder="Task title" fullWidth />
        <OutlinedInput placeholder="Add description to the task" multiline rows={3} fullWidth />
        <Stack direction="row" alignItems="center" gap={spacingTokens.sm}>
          <TriggerButton icon={PersonRegular} label="Assignee" />
          <TriggerButton icon={CalendarRegular} label="Date" />
          <TriggerButton icon={ClockAlarmRegular} label="Reminder" />
          <TriggerButton icon={FlagRegular} label="Priority" />
        </Stack>
      </Stack>
    </ModalLayout>
  );
}
