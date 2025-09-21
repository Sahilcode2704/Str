import Navbar from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-20">
      <Navbar />
      <main className="container mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
          Welcome to ChatApp
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          This is the homepage of your chat app built with Next.js + Tailwind + shadcn/ui.
        </p>
        <div className="mt-6">
          <a
            href="/about"
            className="inline-block px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Learn more
          </a>
        </div>
      </main>
    </div>
  );
}
