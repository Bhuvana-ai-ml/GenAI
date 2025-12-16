"use client";

import ThemeToggle from "./ThemeToggle";

export default function Header() {
  function handleLogout() {
    // ❌ Remove JWT
    localStorage.removeItem("token");

    // 🔁 Force re-render → Login screen
    window.location.reload();
  }

  return (
    <div className="flex justify-between items-center bg-blue-700 text-white p-4 rounded-xl">
      <div>
        <h1 className="text-xl font-semibold">
          Persona-Consistent AI Agent
        </h1>
        <p className="text-sm opacity-90">
          One persona. One call. Production-ready output.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle />

        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-2 rounded text-sm hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
