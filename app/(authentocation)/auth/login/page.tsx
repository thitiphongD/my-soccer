"use client";

import { PrisonLoginAlert } from "@/components/auth/PrisonLoginAlert";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthProvider } from "@/providers/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [prisonInfo, setPrisonInfo] = useState<any>(null);
  const { loginProvider, authLoading } = useAuthProvider();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = await loginProvider(email, password);
    // Handle form submission logic here
    if (result.success) {
      router.push("/");
    } else if (result.prisonInfo) {
      // User is in prison - show prison alert modal
      setPrisonInfo(result.prisonInfo);
    } else {
      // Regular login error
      alert("Login failed. Please try again.");
    }
  };

  const handleClosePrisonAlert = () => {
    setPrisonInfo(null);
    setPassword("");
  };

  return (
    <>
    {prisonInfo && <PrisonLoginAlert prisonInfo={prisonInfo} onClose={handleClosePrisonAlert} />}
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full" disabled={authLoading}>
              {authLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            {"Don't have an account? "}
            <Link
              href="/auth/register"
              className="text-primary hover:underline"
            >
              Register
            </Link>
          </div>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <p className="text-sm font-medium mb-2">Demo Accounts:</p>
            <div className="text-xs space-y-1">
              <div>✅ Admin: admin@example.com / admin123</div>
              <div>✅ User: user@example.com / user123</div>
              <div className="text-red-600 mt-2 pt-2 border-t">
                <div className="font-medium mb-1">
                  🔒 Prison Users (Cannot Login):
                </div>
                <div>❌ trouble@example.com / user123 (Restricted)</div>
                <div>❌ banned@example.com / user123 (Restricted)</div>
                <div>❌ lisa@example.com / user123 (Zero likes)</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
    </>

    
  );
}
