import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../background.css";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "CONTACT | MYUMASE";
  }, []);

  useEffect(() => {
    if (status.message) {
      const timer = setTimeout(() => {
        setStatus({ type: "", message: "" });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status.message]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.message.trim()) {
      setStatus({
        type: "error",
        message: "Please enter a message.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setStatus({
        type: "success",
        message: "Message sent successfully! Thank you for reaching out.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container lg:w-[80vw] mx-auto px-4 pt-24 md:pt-40 pb-8 min-h-screen">
        <h1
          className="text-4xl font-bold mb-8 text-center"
          style={{ fontFamily: "'Libre Baskerville', serif" }}
        >
          CONTACT
        </h1>

        <div className="flex justify-center mb-8">
          <img
            src="https://myumase-portfolio.sgp1.cdn.digitaloceanspaces.com/others/char.png"
            alt="Contact illustration"
            className="w-48 rounded-lg"
          />
        </div>

        <div className="max-w-4xl mx-auto w-full">
          <p className="text-center text-gray-700 mb-8">
            For inquiries about commissions, collaborations, or any questions,
            please fill out the form below.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-sky-300 focus:border-transparent outline-none transition-all"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-sky-300 focus:border-transparent outline-none transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-sky-300 focus:border-transparent outline-none transition-all"
                placeholder="What is this regarding?"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-sky-300 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Your message..."
              />
            </div>

            {status.message && (
              <div
                className={`p-4 rounded-lg ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 text-black font-medium transition-colors border-2 ${
                isSubmitting
                  ? "border-gray-300 text-gray-400 cursor-not-allowed"
                  : "border-sky-400 bg-transparent hover:bg-sky-100"
              }`}
              style={{ fontFamily: "Katibeh, serif" }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;
