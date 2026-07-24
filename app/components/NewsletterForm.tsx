"use client";

import { useState, FormEvent } from "react";
import toast from "react-hot-toast";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Newsletter Subscriber",
          email,
          service: "Newsletter Signup",
          message: `New newsletter signup from the blog page: ${email}`,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("You're subscribed! Watch your inbox for the next issue.");
      setEmail("");
    } catch {
      toast.error("Something went wrong — please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto"
      aria-label="Newsletter signup"
    >
      <input
        type="email"
        placeholder="Enter your work email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        aria-label="Email address"
        className="flex-1 w-full h-11 px-4 rounded-full bg-white text-(--ink-1) text-sm placeholder:text-(--ink-4) border-0 outline-none focus:ring-2 focus:ring-white/50"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto flex-none h-11 px-6 rounded-full bg-white text-primary text-sm font-bold hover:bg-blue-50 transition-colors whitespace-nowrap disabled:opacity-60"
      >
        {loading ? "Subscribing…" : "Subscribe Free"}
      </button>
    </form>
  );
}
