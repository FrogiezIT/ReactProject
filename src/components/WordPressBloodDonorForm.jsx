import { useState } from "react";
import axios from "axios";

const inputClass =
  "rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-200";

const acfFields = [
  {
    key: "mobile",
    label: "Mobile",
    placeholder: "Enter mobile number",
  },
  {
    key: "city",
    label: "City",
    placeholder: "Enter city name",
  },
];

const emptyAcfData = {
  mobile: "",
  city: "",
};

function WordPressBloodDonorForm() {
  const [apiUrl, setApiUrl] = useState(
    "http://localhost/Citydirectory/wp-json/wp/v2/blood_donor"
  );
  const [jwtUrl] = useState(
    "http://localhost/Citydirectory/wp-json/jwt-auth/v1/token"
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [name, setName] = useState("");
  const [bloodGroupId, setBloodGroupId] = useState("");
  const [status, setStatus] = useState("publish");
  const [acfData, setAcfData] = useState(emptyAcfData);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [postId, setPostId] = useState("");

  const isLoggedIn = token !== "";

  function handleAcfChange(event) {
    const { name, value } = event.target;

    setAcfData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function getToken() {
    setLoading(true);
    setMessage("");
    setError("");
    setPostId("");

    try {
      const response = await axios.post(jwtUrl, {
        username,
        password,
      });

      setToken(response.data.token);
      setMessage("Login successful.");
    } catch (err) {
      setToken("");
      setError(err.response?.data?.message || "Token not created.");
    }

    setLoading(false);
  }

  async function createDonor(event) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");
    setPostId("");

    try {
      const postResponse = await axios.post(
        apiUrl,
        {
          title: name,
          status: status,
          blood_group: [Number(bloodGroupId)],
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const newPostId = postResponse.data.id;

      await axios.post(
        `${apiUrl}/${newPostId}`,
        {
          acf: acfData,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setPostId(newPostId);
      setMessage("Blood donor post and ACF fields created successfully.");
      setName("");
      setBloodGroupId("");
      setStatus("publish");
      setAcfData(emptyAcfData);
    } catch (err) {
      setError(err.response?.data?.message || "Post not created.");
    }

    setLoading(false);
  }

  const canGetToken = jwtUrl && username && password;
  const canCreatePost =
    apiUrl &&
    token &&
    name &&
    bloodGroupId &&
    acfData.mobile &&
    acfData.city &&
    !loading;

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-8">
      <section className="mx-auto max-w-3xl rounded-3xl bg-white p-6 shadow-lg sm:p-8">
        <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
          WordPress JWT Form
        </h1>
        <p className="mt-3 text-slate-600">
          Login with WordPress, then create a new blood donor post.
        </p>

        <div className="mt-6 rounded-2xl bg-slate-50 p-5">
          <h2 className="text-xl font-semibold text-slate-900">
            Step 1: Login
          </h2>

          <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 font-medium text-slate-700">
              Username
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={inputClass}
              />
            </label>

            <label className="flex flex-col gap-2 font-medium text-slate-700">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={inputClass}
              />
            </label>
          </div>

          <button
            type="button"
            onClick={getToken}
            disabled={!canGetToken || loading}
            className="mt-4 rounded-2xl bg-blue-600 px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? "Please wait..." : "Login"}
          </button>

          <p className="mt-3 text-sm text-slate-600">
            {isLoggedIn ? "You are logged in." : "Please login first."}
          </p>
        </div>

        {isLoggedIn && (
          <form
            onSubmit={createDonor}
            className="mt-6 rounded-2xl bg-slate-50 p-5"
          >
            <h2 className="text-xl font-semibold text-slate-900">
              Step 2: Create Blood Donor
            </h2>

            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
              <label className="flex flex-col gap-2 font-medium text-slate-700 md:col-span-2">
                API URL
                <input
                  type="text"
                  value={apiUrl}
                  onChange={(e) => setApiUrl(e.target.value)}
                  className={inputClass}
                />
              </label>

              <label className="flex flex-col gap-2 font-medium text-slate-700">
                Donor Name
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClass}
                />
              </label>

              <label className="flex flex-col gap-2 font-medium text-slate-700">
                Status
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className={inputClass}
                >
                  <option value="publish">Publish</option>
                  <option value="draft">Draft</option>
                </select>
              </label>

              <label className="flex flex-col gap-2 font-medium text-slate-700">
                Blood Group Term ID
                <input
                  type="number"
                  value={bloodGroupId}
                  onChange={(e) => setBloodGroupId(e.target.value)}
                  placeholder="Example: 12"
                  className={inputClass}
                />
              </label>

              {acfFields.map((field) => (
                <label
                  key={field.key}
                  className="flex flex-col gap-2 font-medium text-slate-700"
                >
                  {field.label}
                  <input
                    type="text"
                    name={field.key}
                    value={acfData[field.key]}
                    onChange={handleAcfChange}
                    placeholder={field.placeholder}
                    className={inputClass}
                  />
                </label>
              ))}
            </div>

            <button
              type="submit"
              disabled={!canCreatePost}
              className="mt-4 rounded-2xl bg-red-600 px-5 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Please wait..." : "Create Post"}
            </button>
          </form>
        )}

        {message && (
          <p className="mt-4 rounded-2xl bg-green-100 px-4 py-3 text-green-800">
            {message}
          </p>
        )}

        {error && (
          <p className="mt-4 rounded-2xl bg-red-100 px-4 py-3 text-red-700">
            {error}
          </p>
        )}

        {postId && (
          <p className="mt-4 rounded-2xl bg-blue-100 px-4 py-3 text-blue-800">
            Post created. ID: {postId}
          </p>
        )}
      </section>
    </main>
  );
}

export default WordPressBloodDonorForm;
