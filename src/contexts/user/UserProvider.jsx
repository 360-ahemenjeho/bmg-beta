import { useSelector } from "react-redux";
import UserContext from "./UserContext";

export default function UserProvider({ children }) {
  const { user, token } = useSelector((state) => state.user || {});

  const authConfig = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  return (
    <UserContext.Provider
      value={{
        user,
        authConfig,
        token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
