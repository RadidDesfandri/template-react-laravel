import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // prettier-ignore
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api'}/hello`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(data.message || "Hello from Backend!");
        setIsLoading(false);
        setHasError(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setMessage("Failed to connect to backend API");
        setIsLoading(false);
        setHasError(true);
      });
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-blue-950 via-red-900 to-blue-700 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 h-full w-full animate-pulse rounded-full bg-gradient-to-r from-blue-600/20 to-red-600/20 blur-3xl"></div>
        <div className="absolute -right-1/2 -bottom-1/2 h-full w-full animate-pulse rounded-full bg-gradient-to-l from-violet-600/20 to-red-600/20 blur-3xl delay-1000"></div>
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-12">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-2 backdrop-blur-sm">
              <div
                className={`h-3 w-3 animate-pulse rounded-full ${
                  isLoading
                    ? "bg-yellow-400"
                    : hasError
                      ? "bg-red-400"
                      : "bg-green-400"
                }`}
              ></div>
              <span className="text-sm font-medium text-gray-300">
                {isLoading
                  ? "Connecting..."
                  : hasError
                    ? "Connection Failed"
                    : "Connected"}
              </span>
            </div>

            <h1 className="mb-4 bg-gradient-to-r from-white via-purple-200 to-violet-200 bg-clip-text text-6xl font-bold text-transparent md:text-7xl">
              Welcome
            </h1>

            <p className="mb-8 text-xl font-light text-gray-300 md:text-2xl">
              Full-Stack Monorepo Template
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className="group rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:rotate-12">
                <img src="/react.svg" alt="React icon" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">React</h3>
              <p className="text-sm text-gray-400">
                Modern frontend with hooks & components
              </p>
            </div>

            <div className="group rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:rotate-12">
                <img src="/laravel.svg" alt="Laravel icon" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Laravel</h3>
              <p className="text-sm text-gray-400">
                Robust PHP backend framework
              </p>
            </div>

            <div className="group rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:rotate-12">
                <img src="/docker.svg" alt="Docker icon" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Docker</h3>
              <p className="text-sm text-gray-400">
                Containerized development environment
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-2xl rounded-2xl border border-white/20 bg-gradient-to-r from-gray-900/50 to-gray-800/50 p-8 shadow-2xl backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <span className="font-mono text-sm text-gray-400">
                API Response
              </span>
            </div>

            <div className="text-left">
              <div className="mb-2 font-mono text-sm text-gray-400">
                Backend Message:
              </div>
              <div className="relative">
                {isLoading ? (
                  <div className="flex items-center gap-3">
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-purple-500 border-t-transparent"></div>
                    <span className="font-mono text-purple-400">
                      Connecting to backend...
                    </span>
                  </div>
                ) : (
                  <div
                    className={`rounded-lg border p-4 font-mono text-lg ${
                      hasError
                        ? "border-red-500/30 bg-red-500/10 text-red-400"
                        : "border-green-500/30 bg-green-500/10 text-green-400"
                    }`}
                  >
                    "{message}"
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
