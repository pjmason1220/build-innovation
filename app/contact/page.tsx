"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    interest: "assessment",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      // TODO: Replace with your Formspree endpoint or API route
      // For now, this is a placeholder that simulates form submission
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          message: "",
          interest: "assessment",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <Section background="white" className="pt-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-gray-600">
              No pressure, no sales pitch—just a conversation about where you
              are and where you want to be.
            </p>
          </div>
        </Section>

        {/* Contact Form and Info */}
        <Section background="gray">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h2>

                <p className="text-lg text-gray-600 mb-8">
                  Whether you're exploring options, ready to start an
                  assessment, or just have questions about capability building,
                  I'd be happy to talk.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="bg-primary rounded-lg p-3 mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:pjmason1220@gmail.com"
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        pjmason1220@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary rounded-lg p-3 mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+15132828775"
                        className="text-primary hover:text-primary-dark transition-colors"
                      >
                        513-282-8775
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary rounded-lg p-3 mr-4">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 mb-1">
                        Location
                      </h3>
                      <p className="text-gray-600">Greater Cincinnati Area</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-lg p-6">
                  <h3 className="text-xl font-bold mb-3">
                    What to Expect
                  </h3>
                  <ul className="space-y-2 text-gray-100">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        I'll respond within 24 hours (usually much faster)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        We'll schedule a 30-45 minute conversation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        No pressure, no hard sell—just understanding your
                        situation
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        If there's a fit, we'll discuss next steps
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>
                        If not, I'll try to point you in the right direction
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Send a Message
                </h3>

                {status === "success" && (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
                    <p className="font-semibold">Message sent successfully!</p>
                    <p className="text-sm mt-1">
                      I'll get back to you within 24 hours.
                    </p>
                  </div>
                )}

                {status === "error" && (
                  <div className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6">
                    <p className="font-semibold">Oops! Something went wrong.</p>
                    <p className="text-sm mt-1">
                      Please try again or email me directly at{" "}
                      <a
                        href="mailto:pjmason1220@gmail.com"
                        className="underline"
                      >
                        pjmason1220@gmail.com
                      </a>
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="513-282-8775"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      What are you interested in? *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      required
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="assessment">
                        Innovation Capability Assessment
                      </option>
                      <option value="capability-build">
                        Capability Build Program
                      </option>
                      <option value="fractional-cdo">
                        Fractional Chief Design Officer
                      </option>
                      <option value="general">
                        General Inquiry / Not Sure Yet
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell me a bit about your situation and what you're looking to accomplish..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full bg-primary text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? "Sending..." : "Send Message"}
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to be contacted about
                    BUILD Innovation services. No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Section>

        {/* Alternative Contact Methods */}
        <Section background="white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Prefer a Different Approach?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              However you want to connect, I'm happy to accommodate.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  Email Directly
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Skip the form and email me directly with your questions or to
                  schedule a call.
                </p>
                <a
                  href="mailto:pjmason1220@gmail.com"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-semibold"
                >
                  Send Email
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  Call Me
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Feel free to call if you prefer a quick phone conversation to
                  get started.
                </p>
                <a
                  href="tel:+15132828775"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-semibold"
                >
                  513-282-8775
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                <h3 className="font-bold text-lg text-gray-900 mb-3">
                  Connect on LinkedIn
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Connect with me on LinkedIn to see my background and start a
                  conversation.
                </p>
                <a
                  href="https://linkedin.com/in/pjmason"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:text-primary-dark font-semibold"
                >
                  View Profile
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}
