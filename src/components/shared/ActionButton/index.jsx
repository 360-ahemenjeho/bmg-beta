import { DeleteRegular, EditRegular } from "@fluentui/react-icons";

/**
 * @param {Object} props
 * @param {"edit" | "delete"} props.variation
 * @param {() => void} props.onClick
 */
export default function ActionButton({ variation, onClick }) {
  const icons = {
    edit: EditRegular,
    delete: DeleteRegular,
  };

  const Icon = icons[variation];

  return <Icon fontSize={22} onClick={onClick} style={{ cursor: "pointer" }}></Icon>;
}
