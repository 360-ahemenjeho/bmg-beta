import { SummaryCard } from "@/components/shared";
import { spacingTokens } from "@/constants/theme";
import {
  ChatHelpRegular,
  DesktopSpeakerRegular,
  DiversityRegular,
  FlashSparkleRegular,
  MailUnreadRegular,
  PeopleRegular,
  ShieldTaskRegular,
  ShoppingBagRegular,
  TextContinuousRegular,
  ToolboxRegular,
} from "@fluentui/react-icons";
import { Box } from "@mui/material";

export default function Statistics() {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{ xs: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
      rowGap={spacingTokens.lg}
      columnGap={spacingTokens.md}
    >
      <SummaryCard
        secondaryLabel="Users"
        value={7000}
        color="neutral"
        readOnly
        icon={PeopleRegular}
      />
      <SummaryCard
        secondaryLabel="Orders"
        value={7000}
        color="neutral"
        readOnly
        icon={ShoppingBagRegular}
      />
      <SummaryCard
        secondaryLabel="Categories"
        value={7000}
        color="neutral"
        readOnly
        icon={DiversityRegular}
      />
      <SummaryCard
        secondaryLabel="Services"
        value={7000}
        color="neutral"
        readOnly
        icon={ToolboxRegular}
      />
      <SummaryCard
        secondaryLabel="Blogs"
        value={7000}
        color="neutral"
        readOnly
        icon={TextContinuousRegular}
      />
      <SummaryCard
        secondaryLabel="Mail"
        value={7000}
        color="neutral"
        readOnly
        icon={MailUnreadRegular}
      />
      <SummaryCard
        secondaryLabel="Testimonial"
        value={7000}
        color="neutral"
        readOnly
        icon={ShieldTaskRegular}
      />
      <SummaryCard
        secondaryLabel="Consultationn"
        value={7000}
        color="neutral"
        readOnly
        icon={ChatHelpRegular}
      />
      <SummaryCard
        secondaryLabel="Campaign"
        value={7000}
        color="neutral"
        readOnly
        icon={DesktopSpeakerRegular}
      />
      <SummaryCard
        secondaryLabel="Ai"
        value={7000}
        color="neutral"
        readOnly
        icon={FlashSparkleRegular}
      />
    </Box>
  );
}
