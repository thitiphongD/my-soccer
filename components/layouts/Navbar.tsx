import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto p-2">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary">Soccerssex</h1>
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <ThemeToggle />
              <Button asChild variant="outline">
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/register">Register</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
