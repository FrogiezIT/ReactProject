import { useMemo, useState } from "react";
import axios from "axios";

const initialForm = {
  apiUrl: "http://localhost/Citydirectory/wp-json/wp/v2/blood_donor",
  jwtUrl: "http://localhost/Citydirectory/wp-json/jwt-auth/v1/token",
  username: "",
  password: "",
  name: "",
  blood_group: "",
  mobile: "",
  city: "",
  status: "publish",
};

function WordPressBloodDonorForm() {
  const [formData, setFormData] = useState(initialForm);
  const [jwtToken, setJwtToken] = useState("");
  const [authenticating, setAuthenticating] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [createdPost, setCreatedPost] = useState(null);

  const isAuthReady = useMemo(() => {
    return (
      formData.jwtUrl.trim() &&
      formData.username.trim() &&
      formData.password.trim()
    );
  }, [formData]);

  const isFormReady = useMemo(() => {
    return (
      formData.apiUrl.trim() &&
      jwtToken.trim() &&
      formData.name.trim() &&
      formData.blood_group.trim() &&
      formData.mobile.trim() &&
      formData.city.trim()
    );
  }, [formData, jwtToken]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleGetToken = async () => {
    setAuthenticating(true);
    setMessage("");
    setError("");
    setCreatedPost(null);

    try {
      const response = await axios.post(
        formData.jwtUrl,
        {
          username: formData.username,
          password: formData.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const token = response.data?.token;

      if (!token) {
        throw new Error("JWT token was not returned by WordPress.");
      }

      setJwtToken(token);
      setMessage("JWT token created. You can now submit the donor post.");
    } catch (requestError) {
      const apiMessage =
        requestError.response?.data?.message ||
        requestError.message ||
        "Unable to generate a JWT token.";

      setJwtToken("");
      setError(apiMessage);
    } finally {
      setAuthenticating(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);
    setMessage("");
    setError("");
    setCreatedPost(null);

    try {
      const payload = {
        title: formData.name,
        status: formData.status,
        acf: {
          blood_group: formData.blood_group,
          mobile: formData.mobile,
          city: formData.city,
        },
      };

      const response = await axios.post(formData.apiUrl, payload, {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
          "Content-Type": "application/json",
        },
      });

      setCreatedPost(response.data);
      setMessage("Blood donor post created successfully.");
      setFormData((current) => ({
        ...initialForm,
        apiUrl: current.apiUrl,
        jwtUrl: current.jwtUrl,
        username: current.username,
        password: current.password,
      }));
    } catch (requestError) {
      const apiMessage =
        requestError.response?.data?.message ||
        requestError.message ||
        "Unable to create the blood donor post.";

      setError(apiMessage);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(191,219,254,0.8),_transparent_30%),linear-gradient(180deg,_#eff6ff_0%,_#f8fafc_100%)] px-4 py-8 text-slate-900 sm:px-6">
      <section className="mx-auto w-full max-w-3xl rounded-3xl border border-slate-300/40 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] backdrop-blur sm:p-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
          React + Headless WordPress
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Add Blood Donor With JWT
        </h1>
        <p className="mt-4 leading-7 text-slate-600">
          First generate a JWT token from WordPress, then create a new{" "}
          <code className="rounded-md bg-slate-200 px-1.5 py-0.5 text-sm text-slate-800">
            blood_donor
          </code>{" "}
          post with Bearer authentication.
        </p>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="mb-4 text-lg font-semibold">1. Get JWT Token</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <label className="flex flex-col gap-2 font-semibold text-slate-800 md:col-span-2">
              JWT Token URL
              <input
                name="jwtUrl"
                type="url"
                value={formData.jwtUrl}
                onChange={handleChange}
                placeholder="http://localhost/Citydirectory/wp-json/jwt-auth/v1/token"
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-normal text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
              />
            </label>

            <label className="flex flex-col gap-2 font-semibold text-slate-800">
              WordPress Username
              <input
                name="username"
                type="text"
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter your WordPress username"
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-normal text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
              />
            </label>

            <label className="flex flex-col gap-2 font-semibold text-slate-800">
              WordPress Password
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your WordPress password"
                className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-normal text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
              />
            </label>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={handleGetToken}
              disabled={!isAuthReady || authenticating}
              className="rounded-2xl bg-blue-600 px-5 py-3 text-base font-bold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {authenticating ? "Getting Token..." : "Get JWT Token"}
            </button>

            <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-600">
              {jwtToken ? (
                <span className="font-semibold text-green-700">
                  Token ready for requests
                </span>
              ) : (
                "No token generated yet"
              )}
            </div>
          </div>
        </div>

        <form
          className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2"
          onSubmit={handleSubmit}
        >
          <h2 className="text-lg font-semibold md:col-span-2">
            2. Create Blood Donor Post
          </h2>

          <label className="flex flex-col gap-2 font-semibold text-slate-800 md:col-span-2">
            API URL
            <input
              name="apiUrl"
              type="url"
              value={formData.apiUrl}
              onChange={handleChange}
              placeholder="http://localhost/Citydirectory/wp-json/wp/v2/blood_donor"
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-normal text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
            />
          </label>

          <label className="flex flex-col gap-2 font-semibold text-slate-800">
            Donor Name
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Full name"
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-normal text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
            />
          </label>

          <label className="flex flex-col gap-2 font-semibold text-slate-800">
            Blood Group
            <input
              name="blood_group"
              type="text"
              value={formData.blood_group}
              onChange={handleChange}
              placeholder="A+, O-, AB+..."
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-normal text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
            />
          </label>

          <label className="flex flex-col gap-2 font-semibold text-slate-800">
            Mobile
            <input
              name="mobile"
              type="text"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Phone number"
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-normal text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
            />
          </label>

          <label className="flex flex-col gap-2 font-semibold text-slate-800">
            City
            <input
              name="city"
              type="text"
              value={formData.city}
              onChange={handleChange}
              placeholder="City name"
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-normal text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
            />
          </label>

          <label className="flex flex-col gap-2 font-semibold text-slate-800">
            Post Status
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              className="rounded-2xl border border-slate-300 bg-white px-4 py-3 text-base font-normal text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-200"
            >
              <option value="publish">Publish</option>
              <option value="draft">Draft</option>
            </select>
          </label>

          <button
            type="submit"
            disabled={!isFormReady || submitting}
            className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-5 py-4 text-base font-bold text-white shadow-[0_18px_30px_rgba(220,38,38,0.24)] transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-65 disabled:shadow-none md:col-span-2"
          >
            {submitting ? "Creating..." : "Create Donor Post"}
          </button>
        </form>

        {message ? (
          <p className="mt-4 rounded-2xl bg-green-100 px-4 py-3 font-semibold text-green-800">
            {message}
          </p>
        ) : null}

        {error ? (
          <p className="mt-4 rounded-2xl bg-red-100 px-4 py-3 font-semibold text-red-700">
            {error}
          </p>
        ) : null}

        <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
          <h2 className="mb-3 text-lg font-semibold">WordPress setup</h2>
          <ul className="list-disc space-y-2 pl-5 leading-7 text-slate-700">
            <li>Install and enable a JWT auth plugin in WordPress.</li>
            <li>Set your JWT secret key in `wp-config.php`.</li>
            <li>Make sure your site allows the `Authorization` header.</li>
            <li>Your custom post type must support REST API writes.</li>
            <li>ACF fields must be exposed in REST if you want `acf` payload saving.</li>
          </ul>
        </div>

        {createdPost ? (
          <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-5">
            <h2 className="mb-3 text-lg font-semibold">Created post</h2>
            <p className="text-slate-700">
              Post ID: <strong>{createdPost.id}</strong>
            </p>
            <p className="mt-2 text-slate-700">
              Title:{" "}
              <strong
                dangerouslySetInnerHTML={{
                  __html: createdPost.title?.rendered || formData.name,
                }}
              />
            </p>
          </div>
        ) : null}
      </section>
    </main>
  );
}

export default WordPressBloodDonorForm;
