"use client";

import { useState, useEffect } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import ChatWindow from "./components/ChatWindow";
import ChatHistory from "./components/ChatHistory";
import PersonaPanel from "./components/PersonaPanel";

export default function Home() {
  const [token, setToken] = useState(null);
  const [persona, setPersona] = useState("Senior Software Architect");
  const [selectedChat, setSelectedChat] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  // 🔐 If user NOT logged in → show Login
  if (!token) {
    return <Login setToken={setToken} />;
  }

  // ✅ Logged-in user → main app
  return (
    <div className="max-w-7xl mx-auto p-6">
      <Header />

      <div className="flex gap-4 mt-4">
        <ChatHistory onSelect={setSelectedChat} />
        <ChatWindow
          persona={persona}
          selectedChat={selectedChat}
        />
        <PersonaPanel
          persona={persona}
          setPersona={setPersona}
        />
      </div>
    </div>
  );
}
