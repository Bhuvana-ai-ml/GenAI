"use client";

export default function PersonaPanel({ persona, setPersona }) {
  return (
    <div className="w-1/5 bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
      <h2 className="font-semibold mb-3">Persona</h2>

      <select
        value={persona}
        onChange={(e) => setPersona(e.target.value)}
        className="w-full border rounded px-2 py-1 text-black"
      >
        <option>Senior Software Architect</option>
        <option>Technical Educator</option>
        <option>Business Analyst</option>
      </select>

      <ul className="text-sm mt-3 space-y-1">
        <li>• Consistent tone</li>
        <li>• Role-based depth</li>
        <li>• Backend enforced</li>
      </ul>
    </div>
  );
}
