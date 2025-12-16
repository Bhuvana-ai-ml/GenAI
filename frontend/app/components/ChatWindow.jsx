"use client";

import { useState, useEffect } from "react";

export default function ChatWindow({ persona, selectedChat }) {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔁 Load selected chat from history
  useEffect(() => {
    if (selectedChat) {
      setInput(selectedChat.task);
      setOutput(selectedChat.output);
    }
  }, [selectedChat]);

  async function generate() {
    if (!input.trim()) return;

    setLoading(true);
    setOutput("");

    try {
      // ✅ Get JWT token
      const token = localStorage.getItem("token");

      const res = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/generate/`,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ task: input, persona }),
  }
);


      if (!res.ok) {
        throw new Error("Request failed");
      }

      const data = await res.json();
      setOutput(data.result);

      // 💾 Save history (localStorage)
      const history =
        JSON.parse(localStorage.getItem("history")) || [];

      history.unshift({
        task: input,
        output: data.result,
        persona,
        time: new Date().toLocaleTimeString(),
      });

      localStorage.setItem("history", JSON.stringify(history));
    } catch (err) {
      setOutput("Error generating response.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-3/5 bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-3">Output</h2>

      {loading ? (
        <p className="text-sm text-blue-400 animate-pulse">
          Generating…
        </p>
      ) : (
        <pre className="text-sm whitespace-pre-wrap">
          {output}
        </pre>
      )}

      <div className="flex gap-2 mt-4">
        <input
          className="flex-1 border rounded px-3 py-2 text-sm text-black"
          placeholder="Enter task…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={loading}
        />
        <button
          onClick={generate}
          disabled={loading}
          className={`px-4 py-2 rounded text-white ${
            loading ? "bg-gray-500" : "bg-blue-600"
          }`}
        >
          {loading ? "Generating…" : "Generate"}
        </button>
      </div>
    </div>
  );
}
