"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<null | "success" | "error">(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-4xl font-bold text-white mb-6">Contact Me</h1>

      <p className="text-gray-200 mb-8 text-center max-w-xl">
        Hi! I’m always excited to connect. Whether you have a question, a project idea, or just want to say hi, feel free to send a message below.
      </p>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col gap-4 bg-[#2A2E2F] p-6 rounded-lg"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="p-3 rounded bg-[#1F2223] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-gray-400"
          required
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="p-3 rounded bg-[#1F2223] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-gray-400"
          required
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={6}
          className="p-3 rounded bg-[#1F2223] text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-gray-400"
          required
        />

        <button
          type="submit"
          className="bg-[#181A1B] hover:bg-[#111213] text-white font-semibold py-3 rounded transition-colors"
        >
          Send Message
        </button>

        {/* Status message */}
        {status === "success" && (
          <p className="text-green-400 mt-2">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-400 mt-2">Failed to send message. Please try again.</p>
        )}
      </form>
    </div>
  );
}
