"use client";
import { useState } from "react";

const ADMIN_USERNAME = `admin`;
const ADMIN_PASSWORD = `Admin1!`;

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(
    typeof window !== "undefined" &&
      localStorage.getItem("adminLoggedIn") === "true"
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setLoggedIn(true);
      setError("");
      setLoading(true);
      if (typeof window !== `undefined`) {
        localStorage.setItem(`adminLoggedIn`, `true`);
      }
      try {
        const res = await fetch(`/api/admin-entries`);
        if (!res.ok) throw new Error(`Failed to fetch entries`);
        const data = await res.json();
        setEntries(data.submissions || []);
      } catch (err) {
        setError(`Failed to load entries.`);
      }
      setLoading(false);
    } else {
      setError(`Invalid username or password.`);
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
    setEntries([]);
    if (typeof window !== `undefined`) {
      localStorage.removeItem(`adminLoggedIn`);
    }
  };

  // If logged in but entries are empty, fetch entries (simulate useEffect)
  if (loggedIn && entries.length === 0 && !loading) {
    (async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/admin-entries`);
        if (!res.ok) throw new Error(`Failed to fetch entries`);
        const data = await res.json();
        setEntries(data.submissions || []);
      } catch (err) {
        setError(`Failed to load entries.`);
      }
      setLoading(false);
    })();
  }

  if (!loggedIn) {
    return (
      <>
        <head>
          <title>Admin | BollyGroove</title>
          <meta
            name="description"
            content="Admin login and contact form entries for BollyGroove."
          />
        </head>
        <div className="min-h-screen flex items-center justify-center bg-secondary">
          <form
            onSubmit={handleLogin}
            className="bg-white p-8 rounded-xl shadow-xl w-full max-w-sm space-y-6"
          >
            <h1 className="text-2xl font-heading accent-primary text-center font-bold mb-2">
              Admin Login
            </h1>
            {error && (
              <div className="text-red-600 text-sm text-center">{error}</div>
            )}
            <div>
              <label className="block text-sm font-semibold mb-1">
                Username
              </label>
              <input
                type="text"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoFocus
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-2 rounded font-bold hover:bg-secondary hover:text-primary transition-all duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <head>
        <title>Admin | BollyGroove</title>
        <meta
          name="description"
          content="Admin login and contact form entries for BollyGroove."
        />
      </head>
      <div className="min-h-screen bg-secondary px-4 py-10">
        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-heading accent-primary font-bold text-center">
              Contact Form Entries
            </h1>
            <button
              onClick={handleLogout}
              className="bg-secondary text-primary font-bold px-4 py-2 rounded hover:bg-primary hover:text-primary-foreground transition-all duration-200 ml-4"
            >
              Logout
            </button>
          </div>
          {loading ? (
            <div className="text-center text-lg">Loading...</div>
          ) : entries.length === 0 ? (
            <div className="text-center text-gray-500">No entries found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full border text-sm">
                <thead>
                  <tr className="bg-secondary">
                    <th className="px-3 py-2 border">Name</th>
                    <th className="px-3 py-2 border">Email</th>
                    <th className="px-3 py-2 border">Phone</th>
                    <th className="px-3 py-2 border">Message</th>
                    <th className="px-3 py-2 border">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((entry, i) => (
                    <tr
                      key={i}
                      className="hover:bg-primary/10 cursor-pointer"
                      onClick={() => {
                        setSelectedEntry(entry);
                        setShowModal(true);
                      }}
                    >
                      <td className="px-3 py-2 border">{entry.name}</td>
                      <td className="px-3 py-2 border">{entry.email}</td>
                      <td className="px-3 py-2 border">{entry.phone}</td>
                      <td className="px-3 py-2 border line-clamp-1 max-w-xs">
                        {entry.message}
                      </td>
                      <td className="px-3 py-2 border">
                        {new Date(entry.submittedAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {/* Modal for entry details */}
        {showModal && selectedEntry && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-primary font-bold text-lg hover:text-secondary"
                aria-label="Close"
              >
                ×
              </button>
              <h2 className="text-2xl font-bold accent-primary mb-4 text-center">
                Entry Details
              </h2>
              <div className="space-y-3 text-lg">
                <div>
                  <span className="font-semibold">Name:</span>{" "}
                  {selectedEntry.name}
                </div>
                <div>
                  <span className="font-semibold">Email:</span>{" "}
                  {selectedEntry.email}
                </div>
                <div>
                  <span className="font-semibold">Phone:</span>{" "}
                  {selectedEntry.phone}
                </div>
                <div>
                  <span className="font-semibold">Message:</span>{" "}
                  <span className="break-words">{selectedEntry.message}</span>
                </div>
                <div>
                  <span className="font-semibold">Date:</span>{" "}
                  {new Date(selectedEntry.submittedAt).toLocaleDateString()}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
