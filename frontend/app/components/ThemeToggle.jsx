"use client";

export default function ThemeToggle() {
  function toggle() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <button
      onClick={toggle}
      className="border px-3 py-1 rounded text-sm"
    >
      🌙 / ☀️
    </button>
  );
}
