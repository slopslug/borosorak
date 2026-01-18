import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "./LoginContext";

export type User = {
  name: string;
  email: string;
  role: "User" | "Admin";
};

export type LoginProvider = {
  user: User;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  logout: any;
};

export const LoginProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(
    null,
  );
  const navigate = useNavigate();

  function login(
    name: string,
    email: string,
    role: "User" | "Admin",
  ) {
    setUser({ name, email, role });
  }

  function logout() {
    setUser(null);
    navigate("/");
  }

  return (
    <LoginContext.Provider
      value={{ user: user!, login, logout }}
    >
      {children}
    </LoginContext.Provider>
  );
};
