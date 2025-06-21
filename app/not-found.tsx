import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary">
          404
        </h1>
        <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl">
          Something&apos;s missing.
        </p>
        <p className="mb-4 text-lg font-light text-muted-foreground">
          Sorry, we can&apos;t find that page. You&apos;ll find lots to explore on the
          home page.
        </p>

        <Link
          href="/"
          className="mt-6 inline-block text-white hover:underline bg-primary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center my-4"
        >
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
