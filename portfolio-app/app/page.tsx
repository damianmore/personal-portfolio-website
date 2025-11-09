import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50 dark:bg-black text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-6">Welcome to My App</h1>

      <div className="flex gap-4">
        <Link href="/about" className="underline hover:text-blue-500">
          About
        </Link>
        <Link href="/contact" className="underline hover:text-blue-500">
          Contact
        </Link>
      </div>
    </main>
  );
}
