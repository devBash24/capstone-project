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
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/85 p-8 shadow-sm md:p-12">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        <div className="relative z-10">
          <div className="text-center mb-10">
            <p className="mb-4 text-lg font-semibold text-primary">Let’s talk</p>
            <h2 className="mb-4 text-4xl text-foreground md:text-5xl">
              Contact Me
            </h2>
            <div className="mx-auto h-px w-24 bg-section-rule"></div>
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
              <label htmlFor="name" className="font-medium text-foreground">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="Jane Doe"
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/25"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="email" className="font-medium text-foreground">
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
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/25"
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="message" className="font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={6}
                placeholder="Write your message..."
                className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/25"
              />
            </div>

            <div className="flex items-center justify-center pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-3 font-semibold text-primary-foreground shadow-sm transition-all duration-300 hover:bg-accent-strong hover:shadow-md disabled:opacity-60"
              >
                <span>
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
