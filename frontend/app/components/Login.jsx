"use client";

import { useState } from "react";

export default function Login({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleLogin() {
    try {
      const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/login/`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  }
);


      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Login failed");
        return;
      }

      // ✅ Store JWT access token
      localStorage.setItem("token", data.access);
      setToken(data.access);
    } catch (err) {
      setError("Unable to connect to server");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-6 rounded-xl w-80">
        <h2 className="text-xl font-semibold mb-4 text-white">
          Login
        </h2>

        {error && (
          <p className="text-red-400 text-sm mb-2">{error}</p>
        )}

        <input
          className="w-full mb-2 p-2 rounded text-black"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          className="w-full mb-4 p-2 rounded text-black"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
}
