const Offline = () => {
  return (
    <div className="offline-container flex flex-col items-center justify-center min-h-screen p-4 text-center animate-fadeIn bg-swiggy-bg overflow-hidden translate-z-0">
      <div className="max-w-sm w-full bg-white rounded-[32px] shadow-swiggy border border-gray-50 p-10 flex flex-col items-center relative">
        
        {/* Minimalist Connection Status Icon */}
        <div className="mb-6 relative h-24 w-24 flex items-center justify-center">
          <div className="absolute inset-0 bg-orange-50 blur-2xl rounded-full scale-125 opacity-70"></div>
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10">
            {/* WiFi Base Waves (Subtle gray) */}
            <path d="M2 9C4.5 6.5 8 5 12 5C16 5 19.5 6.5 22 9" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round"/>
            <path d="M5 12C7 10 9.5 9 12 9C14.5 9 17 10 19 12" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round"/>
            <path d="M8 15C9.5 14 10.5 13.5 12 13.5C13.5 13.5 14.5 14 16 15" stroke="#E5E7EB" strokeWidth="2" strokeLinecap="round"/>
            {/* Center Status Dot */}
            <circle cx="12" cy="18" r="1.5" fill="#FC8019" className="animate-pulse" />
            {/* The Disconnect Cross */}
            <path d="M16 17L19 20M19 17L16 20" stroke="#FC8019" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* Typography Section */}
        <div className="space-y-2 mb-8">
          <h1 className="text-2xl font-black text-swiggy-dark tracking-tight leading-none italic uppercase">
            Network <span className="text-swiggy-orange not-italic">Off</span>
          </h1>
          <p className="text-gray-700 text-[14px] font-semibold leading-relaxed px-2">
            We couldn't reach the servers. Please check your data connection or Wi-Fi settings.
          </p>
        </div>

        {/* Professional Call-to-action */}
        <button 
          onClick={() => window.location.reload()}
          className="w-full bg-swiggy-dark hover:bg-swiggy-orange text-white py-4 rounded-2xl font-black text-xs tracking-[0.1em] uppercase transition-all duration-300 active:scale-95 shadow-xl shadow-gray-100 cursor-pointer"
        >
          Reload Page
        </button>

        {/* Minimalist Status Bar */}
        <div className="mt-8 flex items-center gap-2 text-[10px] font-black text-gray-300 uppercase tracking-widest animate-pulse">
           Live status: Offline
        </div>
      </div>
    </div>
  );
};

export default Offline;
