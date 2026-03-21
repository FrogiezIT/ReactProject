import axios from "axios";
import { useState } from "react";

const emptyForm = {
  name: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const API_BASE_URL = import.meta.env.VITE_API_URL || "/api";

function LoginSignup() {
  const [mode, setMode] = useState("login");
  const [form, setForm] = useState(emptyForm);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle");
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const isSignup = mode === "signup";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleModeChange = (nextMode) => {
    setMode(nextMode);
    setMessage("");
    setStatus("idle");
    setForm(emptyForm);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");
    setStatus("idle");

    if (!form.email.trim() || !form.password || (isSignup && !form.name.trim())) {
      setMessage("Please fill all required fields.");
      setStatus("error");
      return;
    }

    if (isSignup && form.password !== form.confirmPassword) {
      setMessage("Passwords do not match.");
      setStatus("error");
      return;
    }

    try {
      setLoading(true);

      // Frontend request workflow:
      // 1. Send the form data to the Node API.
      // 2. Let the backend validate and talk to MongoDB.
      // 3. Show the API response message and user data on success.
      const endpoint = isSignup ? "/auth/signup" : "/auth/login";
      const { data } = await axios.post(`${API_BASE_URL}${endpoint}`, form);

      setCurrentUser(data.user);
      setMessage(data.message);
      setStatus("success");
      setForm(emptyForm);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Request failed. Please try again."
      );
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setMessage("You have been logged out from the UI.");
    setStatus("idle");
    setMode("login");
    setForm(emptyForm);
  };

  if (currentUser) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-8">
        <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
            Logged In
          </p>
          <h1 className="mt-2 text-2xl font-bold text-slate-900">
            Welcome, {currentUser.name}
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Your account is now coming from the Node API and MongoDB.
          </p>

          <div className="mt-6 rounded-xl bg-slate-50 p-4">
            <p className="text-sm text-slate-500">Email</p>
            <p className="mt-1 font-medium text-slate-900">
              {currentUser.email}
            </p>
          </div>

          {message && (
            <p className="mt-4 text-sm font-medium text-slate-700">{message}</p>
          )}

          <button
            type="button"
            onClick={handleLogout}
            className="mt-6 w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Logout
          </button>
        </section>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-8">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <h1 className="text-2xl font-bold text-slate-900">Welcome</h1>
        <p className="mt-1 text-sm text-slate-600">
          {isSignup
            ? "Create your account to get started."
            : "Login to continue to your dashboard."}
        </p>

        <div className="mt-5 grid grid-cols-2 rounded-xl bg-slate-100 p-1 text-sm font-semibold">
          <button
            type="button"
            onClick={() => handleModeChange("login")}
            className={`rounded-lg py-2 transition ${
              !isSignup
                ? "bg-white text-slate-900 shadow"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Login
          </button>
          <button
            type="button"
            onClick={() => handleModeChange("signup")}
            className={`rounded-lg py-2 transition ${
              isSignup
                ? "bg-white text-slate-900 shadow"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Signup
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          {isSignup && (
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-0 transition focus:border-slate-400"
              />
            </div>
          )}

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-0 transition focus:border-slate-400"
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-0 transition focus:border-slate-400"
            />
          </div>

          {isSignup && (
            <div>
              <label className="mb-1 block text-sm font-medium text-slate-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none ring-0 transition focus:border-slate-400"
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            {loading
              ? "Please wait..."
              : isSignup
                ? "Create Account"
                : "Login"}
          </button>
        </form>

        {message && (
          <p
            className={`mt-3 text-sm font-medium ${
              status === "error" ? "text-red-600" : "text-slate-700"
            }`}
          >
            {message}
          </p>
        )}
      </section>
    </main>
  );
}

export default LoginSignup;
