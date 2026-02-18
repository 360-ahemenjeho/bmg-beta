import { DashboardLayout } from "@/layouts";
import { AdminOverviewPage, DesignSystemPage, GoalsPage } from "@/pages/dashboard";
import { Routes as BaseRoutes, Route } from "react-router-dom";

export default function Routes() {
  return (
    <BaseRoutes>
      <Route element={<DashboardLayout />}>
        <Route path="/design/system" element={<DesignSystemPage />} />
        <Route path="/" element={<AdminOverviewPage />} />
        <Route path="/goals" element={<GoalsPage />} />
      </Route>
    </BaseRoutes>
  );
}
