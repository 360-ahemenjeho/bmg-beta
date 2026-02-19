import {
  DataPieRegular,
  DiversityRegular,
  DocumentFolderRegular,
  FormRegular,
  GlanceRegular,
  PeopleRegular,
  PeopleTeamRegular,
  ProjectionScreenTextSparkleRegular,
  SettingsRegular,
  TargetArrowRegular,
  TextBulletListSquareRegular,
  WrenchSettingsRegular,
} from "@fluentui/react-icons";

/** @typedef {import("@/types/global.d.js").NavItem} NavItemProps */

export function useNavigationMenu() {
  const role = "customer";

  /**
   * @type {{
   *  admin?: NavItemProps[],
   *  customer?: NavItemProps[]
   * }}
   */
  const menu = {
    admin: [
      { label: "Overview", path: "/", icon: GlanceRegular },
      { label: "Users", path: "/users", icon: PeopleRegular },
      {
        label: "Category",
        path: "/category",
        icon: DiversityRegular,
        sub: [
          { label: "Sub Category", path: "/category/sub-category", icon: DiversityRegular },
          { label: "Add Category", path: "/category/add-category", icon: DiversityRegular },
        ],
      },
      { label: "Settings", path: "/settings", icon: SettingsRegular },
    ],
    customer: [
      { label: "Overview", path: "/", icon: GlanceRegular },
      {
        label: "CRM",
        path: "",
        icon: PeopleTeamRegular,
        color: "#05970F",
      },
      { label: "Sales", path: "/crm", icon: DataPieRegular, color: "#0A62C7" },
      {
        label: "Projects",
        path: "/projects",
        icon: ProjectionScreenTextSparkleRegular,
        color: "#FF0004",
        sub: [
          { label: "Goals", path: "/goals", icon: TargetArrowRegular },
          { label: "Tasks", path: "/tasks", icon: TextBulletListSquareRegular },
        ],
      },
      { label: "Files", color: "#2C3891", path: "/files", icon: DocumentFolderRegular },
      { label: "Forms", color: "#3B009D", path: "/forms", icon: FormRegular },
      { label: "Automation", color: "#F1592A", path: "/automation", icon: WrenchSettingsRegular },
    ],
  };

  return menu[role] || [];
}
