import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import Button from "../components/Button";
import { sendMessage } from "../api";
import { profile } from "../data/resume";

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    try {
      await sendMessage(form);
      setStatus("sent");
      setForm(initialForm);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="py-16 sm:py-20">
      <SectionHeading eyebrow="Let's Talk" title="Contact" />

      <div className="grid md:grid-cols-2 gap-12">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-glass rounded-xl p-6 space-y-5"
        >
          <div>
            <label htmlFor="name" className="axis-label block mb-2">Name</label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-void-alt border border-violet/30 rounded-lg px-4 py-3 text-lavender focus:outline-none focus:border-fuchsia transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="axis-label block mb-2">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-void-alt border border-violet/30 rounded-lg px-4 py-3 text-lavender focus:outline-none focus:border-fuchsia transition-colors"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="axis-label block mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-void-alt border border-violet/30 rounded-lg px-4 py-3 text-lavender focus:outline-none focus:border-fuchsia transition-colors resize-none"
              placeholder="What's on your mind?"
            />
          </div>

          <Button type="submit" className="w-full justify-center" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Message"}
          </Button>

          {status === "sent" && (
            <p className="text-sm font-mono text-fuchsia">Message sent — I'll get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-sm font-mono text-mist">
              Couldn't send that. Make sure the server is running (see README).
            </p>
          )}
        </motion.form>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-6"
        >
          <p className="text-lavender/80 leading-relaxed">
            Prefer reaching out directly? Here's where to find me.
          </p>
          <ul className="space-y-3 font-mono text-sm">
            <li>
              <a href={`mailto:${profile.email}`} className="text-violet hover:text-fuchsia transition-colors">
                {profile.email}
              </a>
            </li>
            <li className="text-lavender/70">{profile.phone}</li>
            <li>
              <a href={profile.github} target="_blank" rel="noreferrer" className="text-violet hover:text-fuchsia transition-colors">
                GitHub — Akshat2401MM02
              </a>
            </li>
            <li>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="text-violet hover:text-fuchsia transition-colors">
                LinkedIn
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
