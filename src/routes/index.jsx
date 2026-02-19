import { DashboardLayout } from "@/layouts";
import {
  AdminOverviewPage,
  CustomerOverviewPage,
  DesignSystemPage,
  GoalsPage,
} from "@/pages/dashboard";
import { Routes as BaseRoutes, Route } from "react-router-dom";

export default function Routes() {
  const AUTHENTICATED_USER = /** @type {"CUSTOMER" | "ADMIN"} */ ("CUSTOMER");

  return (
    <BaseRoutes>
      <Route element={<DashboardLayout />}>
        <Route path="/design/system" element={<DesignSystemPage />} />
        {AUTHENTICATED_USER === "ADMIN" && (
          <>
            <Route path="/" element={<AdminOverviewPage />} />
          </>
        )}

        {AUTHENTICATED_USER === "CUSTOMER" && (
          <>
            <Route path="/goals" element={<GoalsPage />} />
            <Route path="/" element={<CustomerOverviewPage />} />
          </>
        )}
      </Route>
    </BaseRoutes>
  );
}
