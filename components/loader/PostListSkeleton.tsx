import { Skeleton } from "../ui/skeleton";

export default function PostListSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className={`border rounded-lg p-4 h-fit ${
            i === 0 ? "col-span-full" : ""
          }`}
        >
          {i === 0 ? (
            // First card skeleton - horizontal layout
            <div className="flex gap-4">
              <Skeleton className="h-24 w-32 md:h-32 md:w-48 rounded flex-shrink-0" />
              <div className="flex-1">
                <Skeleton className="h-6 w-3/4 mb-2" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-full mb-1" />
                <Skeleton className="h-4 w-2/3 mb-3" />
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-20" />
                </div>
              </div>
            </div>
          ) : (
            // Regular card skeleton - vertical layout
            <>
              <Skeleton className="h-5 w-3/4 mb-2" />
              <Skeleton className="h-3 w-full mb-1" />
              <Skeleton className="h-3 w-full mb-1" />
              <Skeleton className="h-3 w-2/3 mb-3" />
              <div className="flex gap-2 mb-3">
                <Skeleton className="h-12 w-12 rounded" />
                <Skeleton className="h-12 w-12 rounded" />
              </div>
              <div className="flex justify-between">
                <Skeleton className="h-3 w-20" />
                <Skeleton className="h-3 w-16" />
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
