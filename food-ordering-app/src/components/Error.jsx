import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      {/* ── Navbar ── */}
      <header className="flex items-center px-4 sm:px-8 xl:px-16 py-5 border-b border-gray-100 shadow-sm bg-white h-20 md:h-24 sticky top-0 z-50">
        <Link to="/" className="flex items-center gap-2">
          <p className="text-2xl font-black text-swiggy-dark tracking-tighter">
            Namaste<span className="text-swiggy-orange"> Food</span>
          </p>
        </Link>
      </header>

      {/* ── Main ── */}
      <main className="flex-1 flex items-center justify-center px-6 py-12 md:py-20">
        <div className="max-w-xl w-full text-center space-y-8 animate-fadeIn">
          {/* Error code — large but subtle */}
          <div className="space-y-1">
            <p className="text-[120px] md:text-[180px] font-black text-gray-100 tracking-tighter leading-none select-none absolute left-1/2 -translate-x-1/2 -z-10 opacity-30">
              {err?.status || "404"}
            </p>
            <p className="text-8xl font-black text-swiggy-dark tracking-tighter leading-none select-none relative z-10">
              Oops!
            </p>
            <p className="text-sm font-bold text-swiggy-orange uppercase tracking-[0.3em] mt-4 relative z-10">
              {err?.statusText || "Page Not Found"}
            </p>
          </div>

          {/* Heading & description */}
          <div className="space-y-4 px-4 relative z-10">
            <h1 className="text-2xl md:text-3xl font-extrabold text-swiggy-dark leading-snug">
              Lost in the flavor?
            </h1>
            <p className="text-swiggy-text-muted text-base md:text-lg leading-relaxed max-w-md mx-auto">
              {err?.data ||
                "The page you're looking for didn't make the menu. Let's get you back to the delicious stuff."}
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 relative z-10">
            <Link
              to="/"
              className="w-full sm:w-auto bg-swiggy-orange hover:bg-orange-600 active:scale-95 text-white font-bold py-4 px-10 rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/20 text-sm md:text-base uppercase tracking-wider"
            >
              Back to Home
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-white hover:bg-gray-50 active:scale-95 text-swiggy-dark font-bold py-4 px-10 rounded-xl border-2 border-gray-100 transition-all duration-300 text-sm md:text-base uppercase tracking-wider"
            >
              Help & Support
            </Link>
          </div>

          {/* Technical Info */}
          <div className="pt-8 opacity-40">
            <p className="text-xs font-medium text-swiggy-text-muted flex items-center justify-center gap-2">
              <span className="w-1 h-1 bg-swiggy-text-muted rounded-full"></span>
              ERROR {err?.status || "404"}
              <span className="w-1 h-1 bg-swiggy-text-muted rounded-full"></span>
              NAMASTE FOOD
            </p>
          </div>
        </div>
      </main>

      {/* ── Footer ── */}
      <footer className="py-8 text-center border-t border-gray-50">
        <p className="text-sm font-medium text-swiggy-text-muted">
          © {new Date().getFullYear()} Namaste Food Limited.
        </p>
      </footer>
    </div>
  );
};

export default Error;
