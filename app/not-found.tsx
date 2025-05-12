import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4 bg-primary">
      <div className="text-2xl font-bold">404 | Page Not Found</div>
      <Link href={"/"} className="bg-accent px-4 py-2 rounded-full">
        Back to home
      </Link>
    </div>
  );
}
