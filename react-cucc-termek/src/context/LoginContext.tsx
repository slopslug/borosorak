import { createContext } from "react";
import type { LoginProvider } from "./LoginProvider";

export const LoginContext =
  createContext<LoginProvider | null>(null);
