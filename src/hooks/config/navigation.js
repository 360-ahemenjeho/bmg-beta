import {
  DiversityRegular,
  GlanceRegular,
  PeopleRegular,
  SettingsRegular,
} from "@fluentui/react-icons";

export function useNavigationMenu() {
  const role = "admin";

  const menu = {
    admin: [
      { label: "Overview", path: "/overview", icon: GlanceRegular },
      { label: "Users", path: "/users", icon: PeopleRegular },
      {
        label: "Category",
        path: "/category",
        icon: DiversityRegular,
        sub: [
          { label: "Sub Category", path: "/category/sub-category" },
          { label: "Add Category", path: "/category/add-category" },
        ],
      },
      { label: "Settings", path: "/settings", icon: SettingsRegular },
    ],
  };

  return menu[role] || [];
}
