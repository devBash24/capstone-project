"use client"

import { useState } from "react"
import emailjs from "emailjs-com"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle")
  const [errorMsg, setErrorMsg] = useState<string | null>(null)

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

  function validate(): string | null {
    if (!name || name.trim().length < 2) {
      return "Please enter your name (2+ characters)."
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return "Please enter a valid email address."
    }
    if (!message || message.trim().length < 10) {
      return "Please enter a message of at least 10 characters."
    }
    if (!serviceId || !templateId || !publicKey) {
      return "Email service not configured. Add NEXT_PUBLIC_EMAILJS_* env vars."
    }
    return null
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setErrorMsg(null)
    const err = validate()
    if (err) {
      setStatus("error")
      setErrorMsg(err)
      return
    }

    try {
      setStatus("submitting")
      await emailjs.send(
        serviceId!,
        templateId!,
        {
          from_name: name,
          from_email: email,
          message,
        },
        publicKey!
      )
      setStatus("success")
      setName("")
      setEmail("")
      setMessage("")
    } catch {
      setStatus("error")
      setErrorMsg("Failed to send message. Please try again.")
    }
  }

  return (
    <section id="contact" className="space-y-8">
      <div className="relative overflow-hidden bg-white/60 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl p-8 md:p-12">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="relative z-10">
          <div className="text-center mb-10">
            <p className="text-blue-600 font-semibold text-lg mb-4">Let’s talk</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
              Contact Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {status === "success" && (
            <div className="mb-6 rounded-2xl border border-green-200 bg-green-50 text-green-800 px-6 py-4">
              Your message has been sent. I’ll be in touch soon.
            </div>
          )}
          {status === "error" && errorMsg && (
            <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 text-red-800 px-6 py-4">
              {errorMsg}
            </div>
          )}

          <form onSubmit={onSubmit} className="grid gap-6 max-w-2xl mx-auto">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-slate-700 font-medium">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Jane Doe"
                className="w-full rounded-xl border border-slate-200/60 bg-white/80 backdrop-blur-sm px-4 py-3 text-slate-700 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="text-slate-700 font-medium">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-invalid={status === "error" && !!errorMsg}
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200/60 bg-white/80 backdrop-blur-sm px-4 py-3 text-slate-700 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="text-slate-700 font-medium">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-slate-200/60 bg-white/80 backdrop-blur-sm px-4 py-3 text-slate-700 placeholder-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              />
            </div>

            <div className="flex items-center justify-center pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group relative inline-flex items-center gap-2 rounded-2xl px-8 py-3 font-semibold text-white shadow-xl transition-all duration-300 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:opacity-60"
              >
                <span className="relative z-10">
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </span>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
