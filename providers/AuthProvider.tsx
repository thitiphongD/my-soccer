import {
  getPrisonExpiry,
  getPrisonWarning,
  isPrisonUser,
} from "@/lib/prison-ranks";
import { mockUsers } from "@/mock-data/user.mock";
import { createContext, ReactNode, useEffect, useMemo, useState } from "react";

export interface User {
  id: string;
  email: string;
  name: string | null;
  role: "USER" | "ADMIN";
  totalLikes: number;
}

interface AuthContextType {
  user: User | null;
  loginProvider: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; error?: string; prisonInfo?: any }>;
  logoutProvider: () => void;
  registerProvider: (
    name: string,
    email: string,
    password: string
  ) => Promise<boolean>;
  authLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({
  children,
}: Readonly<{ children: ReactNode }>) {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("usersData");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);

      // Check if stored user is now in prison - if so, log them out
      const isPrison =
        isPrisonUser(parsedUser.id) ?? parsedUser.totalLikes <= 0;
      if (isPrison) {
        localStorage.removeItem("usersData");
        setUser(null);
      } else {
        setUser(parsedUser);
      }
    }
    setAuthLoading(false);
  }, []);

  const loginProvider = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; error?: string; prisonInfo?: any }> => {
    setAuthLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const foundUser = mockUsers.find(
      (u) => u.email === email && u.password === password
    );

    if (!foundUser) {
      setAuthLoading(false);
      return { success: false, error: "Invalid email or password" };
    }

    // Check if user is in prison
    const isPrison = isPrisonUser(foundUser.id) || foundUser.totalLikes <= 0;

    if (isPrison) {
      const userForPrison = {
        id: foundUser.id,
        email: foundUser.email,
        name: foundUser.name,
        role: foundUser.role,
        totalLikes: foundUser.totalLikes,
      };

      const expiry = getPrisonExpiry(userForPrison);
      const warning = getPrisonWarning(userForPrison);
      const isManualRestriction = isPrisonUser(foundUser.id);

      setAuthLoading(false);
      return {
        success: false,
        error: "Account restricted",
        prisonInfo: {
          user: userForPrison,
          warning,
          expiry,
          isManualRestriction,
          type: isManualRestriction ? "error" : "warning",
        },
      };
    }

    // User is not in prison, allow login
    const userSession = {
      id: foundUser.id,
      email: foundUser.email,
      name: foundUser.name,
      role: foundUser.role,
      totalLikes: foundUser.totalLikes,
    };

    setUser(userSession);
    localStorage.setItem("usersData", JSON.stringify(userSession));
    setAuthLoading(false);
    return { success: true };
  };

  const logoutProvider = () => {
    setUser(null);
    localStorage.removeItem("usersData");
  };

  const registerProvider = async (
    name: string,
    email: string,
    password: string
  ): Promise<boolean> => {
    setAuthLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Check if user already exists
    const existingUser = mockUsers.find((u) => u.email === email);
    if (existingUser) {
      setAuthLoading(false);
      return false;
    }

    // Add new user to mock data
    const newUser = {
      id: `user${Date.now()}`,
      email,
      name,
      password,
      role: "USER" as const,
      totalLikes: 0,
    };

    mockUsers.push(newUser);

    // New users start with 0 likes, so they're in prison - don't auto-login
    setAuthLoading(false);
    return true;
  };

  const ContextAuth = useMemo(() => {
    return {
      user,
      loginProvider,
      logoutProvider,
      registerProvider,
      authLoading,
    };
  }, [user, authLoading]);

  return (
    <AuthContext.Provider value={ContextAuth}>{children}</AuthContext.Provider>
  );
}
