import { AuthLayout, DashboardLayout } from "@/layouts";
import { LoginPage } from "@/pages/auth";
import {
  AdminOverviewPage,
  CompaniesPage,
  CustomerOverviewPage,
  DesignSystemPage,
  TasksPage,
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
            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/" element={<CustomerOverviewPage />} />
            <Route path="/companies" element={<CompaniesPage />} />
          </>
        )}
      </Route>

      <Route element={<AuthLayout />}>
        <>
          <Route path="/login" element={<LoginPage />} />
        </>
      </Route>
    </BaseRoutes>
  );
}
