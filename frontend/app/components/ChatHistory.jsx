"use client";

import { useEffect, useState } from "react";

export default function ChatHistory({ onSelect }) {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("history")) || [];
    setHistory(data);
  }, []);

  return (
    <div className="w-1/5 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-3">Chat History</h2>

      <div className="text-sm space-y-2">
        {history.length === 0 && (
          <p className="text-gray-400">No history</p>
        )}

        {history.map((item, idx) => (
          <div
            key={idx}
            onClick={() => onSelect(item)}
            className="cursor-pointer bg-blue-100 dark:bg-gray-700 p-2 rounded hover:opacity-80"
          >
            <div className="font-medium truncate">
              {item.task}
            </div>
            <div className="text-xs opacity-70">
              {item.persona} • {item.time}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
