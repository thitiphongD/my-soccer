"use client";

import Link from "next/link";
import { ThemeToggle } from "../ThemeToggle";
import { Button } from "../ui/button";
import { useAuthProvider } from "@/providers/AuthProvider";
import { Avatar, AvatarFallback } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Heart, LogOut, User } from "lucide-react";

export default function Navbar() {
  const { user, logoutProvider } = useAuthProvider();
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
              {user ? (
                <>
                  {/* <CreatePostButton /> */}
                  {user.role === "ADMIN" && (
                    <Button asChild variant="outline">
                      <Link href="/admin">Admin</Link>
                    </Button>
                  )}

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Avatar className="w-8 h-8 cursor-pointer">
                        <AvatarFallback>
                          {user.email?.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56" align="start">
                      <DropdownMenuGroup>
                        <DropdownMenuItem className="cursor-pointer">
                          <Link href={`/profile/${user.id}`} className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Profile
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">
                          <Link href="/likes" className="flex items-center gap-2">
                            <Heart className="w-4 h-4" />
                            Likes
                          </Link>
                        </DropdownMenuItem>
                      </DropdownMenuGroup>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>
                        <Button
                          variant="destructive"
                          onClick={logoutProvider}
                          className="w-full"
                        >
                          Logout
                          <LogOut className="w-4 h-4" />
                        </Button>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </>
              ) : (
                <div className="flex gap-2">
                  <Button asChild variant="outline">
                    <Link href="/auth/login">Login</Link>
                  </Button>
                  <Button asChild>
                    <Link href="/auth/register">Register</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
