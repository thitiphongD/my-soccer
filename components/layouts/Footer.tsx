export default function Footer() {
  return (
    <footer className="bg-background border-t mt-2">
      <div className="container mx-auto p-4">
        <p className="text-center text-sm text-primary">
          &copy; {new Date().getFullYear()} Soccerssex. All rights reserved.
        </p>
      </div>
    </footer>
  );
}