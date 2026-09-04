"use client";

import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { useState, type FormEvent } from "react";

type SubmitStatus = { type: "success" | "error"; message: string } | null;

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    void (async () => {
      try {
        const { error } = await supabase.from("contact_messages").insert(formData);

        if (error) {
          setSubmitStatus({ type: "error", message: `Message transmission failed: ${error.message}` });
        } else {
          setFormData({ name: "", email: "", message: "" });
          setSubmitStatus({ type: "success", message: "Message transmitted successfully." });
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : "Please try again.";
        setSubmitStatus({ type: "error", message: `Message transmission failed: ${message}` });
      } finally {
        setIsSubmitting(false);
      }
    })();
  }

  return (
    <section id="contact" className="min-h-screen scroll-mt-24 px-6 pb-20 pt-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center">
        <div className="text-center">
          <h2 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
            Let&apos;s Connect
          </h2>
        </div>

        <motion.div
          className="mt-12 w-full rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md lg:p-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.15 }}
        >
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="flex flex-col justify-between">
              <div>
                <p className="max-w-md text-lg leading-8 text-muted-foreground">
                  I&apos;m open to new opportunities, thoughtful collaborations, and a good conversation about technology, design, or ideas worth building.
                </p>

                <div className="mt-10 space-y-6">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <MapPin className="h-5 w-5 shrink-0 text-neon-cyan" aria-hidden="true" />
                    <span>Quezon City, Philippines</span>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <Mail className="h-5 w-5 shrink-0 text-neon-cyan" aria-hidden="true" />
                    <a href="mailto:oswardpuriran003@gmail.com" className="transition-colors hover:text-neon-cyan">
                      oswardpuriran003@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-5">
                <a
                  href="https://github.com/osward07"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-muted-foreground transition-all hover:text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/puriran-osward-jr-n-a80ab9326/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-muted-foreground transition-all hover:text-neon-cyan hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="contact-name" className="sr-only">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Name"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-black/20 p-4 text-white placeholder:text-gray-500 transition-colors focus:border-neon-cyan focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="sr-only">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-black/20 p-4 text-white placeholder:text-gray-500 transition-colors focus:border-neon-cyan focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-white/10 bg-black/20 p-4 text-white placeholder:text-gray-500 transition-colors focus:border-neon-cyan focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-white/10 py-4 font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-neon-cyan hover:text-black"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              {submitStatus && (
                <p
                  role="status"
                  className={submitStatus.type === "success" ? "text-sm text-neon-cyan" : "text-sm text-red-400"}
                >
                  {submitStatus.message}
                </p>
              )}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
