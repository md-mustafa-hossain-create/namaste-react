import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();


  return (
    <div className="min-h-screen bg-white flex flex-col">

      {/* ── Navbar (mirrors site header) ── */}
      <header className="flex items-center px-8 py-5 border-b border-gray-100 shadow-sm bg-white">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            Namaste <span className="text-red-600">Food</span>
          </span>
        </Link>
      </header>

      {/* ── Main ── */}
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-xl w-full text-center space-y-8">

          {/* Error code — large but subtle */}
          <div className="space-y-1">
            <p className="text-8xl font-black text-gray-800 tracking-tighter leading-none select-none">
              {err?.status || "404"}
            </p>
            <p className="text-sm font-semibold text-red-600 uppercase tracking-widest -mt-2">
              {err?.statusText || "Page Not Found"}
            </p>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-100"></div>
            <span className="text-gray-300 text-xs">✦</span>
            <div className="flex-1 h-px bg-gray-100"></div>
          </div>

          {/* Heading & description */}
          <div className="space-y-3 px-4">
            <h1 className="text-2xl font-bold text-gray-800 leading-snug">
              We couldn&apos;t find that page
            </h1>
            <p className="text-gray-700 text-base leading-relaxed font-medium">
              {err?.data ||
                "The page you're looking for may have been moved, deleted, or doesn't exist. Let's get you back on track."}
            </p>
          </div>

          {/* CTAs — primary + secondary (Hick's Law: max 2 choices) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm"
            >
              Go to Homepage
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 active:scale-95 text-gray-800 font-semibold py-3 px-8 rounded-xl border border-gray-200 transition-all duration-200 text-sm hover:border-gray-300"
            >
              Contact Support
            </Link>
          </div>

          {/* Breadcrumb hint */}
          <p className="text-xs text-gray-400">
            Error code &nbsp;
            <span className="font-mono bg-gray-50 px-2 py-0.5 rounded border border-gray-100 text-gray-500">
              {err?.status || "404"}
            </span>
            &nbsp;· Namaste Food
          </p>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 py-5 text-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} Namaste Food. All rights reserved.
        </p>
      </footer>

    </div>
  );
};

export default Error;
