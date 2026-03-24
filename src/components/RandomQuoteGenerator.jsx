import { useEffect, useState } from "react";
import axios from "axios";

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState({ quote: "Loading...", author: "" });
  const [loading, setLoading] = useState(false);

  const getQuote = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("https://dummyjson.com/quotes/random");
      setQuote(data);
    } catch {
      setQuote({ quote: "Could not load quote. Try again.", author: "" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <main className="grid min-h-screen place-items-center bg-slate-100 p-4">
      <section className="w-full max-w-lg rounded-xl bg-white p-6 text-center shadow">
        <p className="text-xl font-semibold text-slate-800">"{quote.quote}"</p>
        <p className="mt-2 text-slate-600">- {quote.author || "Unknown"}</p>
        <button
          onClick={getQuote}
          disabled={loading}
          className="mt-5 rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white"
        >
          {loading ? "Loading..." : "New Quote"}
        </button>
      </section>
    </main>
  );
};

export default RandomQuoteGenerator;
