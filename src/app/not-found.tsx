import Link from "next/link";

export default function notFound() {
  return (
    <div className="w-full min-h-screen items-center justify-center px-4 py-20 text-center">
      <div className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
        We cannot find the page you&apos;re looking for.
      </div>
      <Link
        href="/"
        className="inline-block bg-blue-600 hover:bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
      >
        Go back home
      </Link>
    </div>
  );
}
