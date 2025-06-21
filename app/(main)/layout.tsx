import CategoryFilter from "@/components/CategoryFilter";
import Navbar from "@/components/layouts/Navbar";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

export default function MainLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto p-2">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <aside className="lg:col-span-1">
            <Suspense fallback={<Skeleton className="w-full" />}>
              <CategoryFilter />
            </Suspense>
          </aside>
          <div className="lg:col-span-3">{children}</div>
        </div>
      </main>
    </>
  );
}
