import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  // Read the auth state from Redux so the page knows whether the user is signed in.
  // We use this to keep the UI behavior aligned with the Firestore rule:
  // only authenticated users are allowed to create documents in the "message" collection.
  const isAuthenticated = useSelector((store) => store.user.isAuthenticated);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Guard the submit action before calling Firestore.
    // This prevents guests from hitting a permission error and gives them
    // a clear message that they need to sign in first.
    if (!isAuthenticated) {
      setErrorMessage("Please sign in before sending a message.");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "message"), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date(),
      });
      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });

      setLoading(false);
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      setLoading(false);
      console.error("Error adding document: ", error);
      setErrorMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <div className="min-h-[80vh] bg-white py-16 px-4 sm:px-8 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-4xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-swiggy-dark mb-4">
          Get in <span className="text-swiggy-orange">Touch</span>
        </h1>
        <p className="text-swiggy-text-muted text-lg">
          Have a question or feedback? We'd love to hear from you. Our team
          typically responds within 24 hours.
        </p>
      </div>

      <div className="w-full max-w-6xl grid md:grid-cols-5 gap-12 bg-swiggy-bg/30 p-4 md:p-12 rounded-[40px]">
        {/* Contact Info */}
        <div className="md:col-span-2 flex flex-col gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-bold text-swiggy-dark mb-6">
              Contact Information
            </h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-swiggy-orange/10 rounded-xl text-swiggy-orange">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-swiggy-dark">Email Us</p>
                  <p className="text-swiggy-text-muted text-sm">
                    support@namastefood.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-swiggy-orange/10 rounded-xl text-swiggy-orange">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-swiggy-dark">Call Us</p>
                  <p className="text-swiggy-text-muted text-sm">
                    +91 1800-FOOD-LOVE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-swiggy-orange/10 rounded-xl text-swiggy-orange">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-swiggy-dark">Headquarters</p>
                  <p className="text-swiggy-text-muted text-sm">
                    123 Culinary Drive, Block 4,
                    <br />
                    Indiranagar, Bangalore - 560038
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-1 flex-col items-center justify-center gap-6 select-none animate-fadeIn">
            <div className="relative">
              {/* Subtle background glow */}
              <div className="absolute -inset-8 bg-swiggy-orange/10 blur-3xl rounded-full" />
              <div className="relative bg-white p-8 rounded-[32px] shadow-swiggy border border-gray-50">
                <MessageSquare className="w-24 h-24 text-swiggy-orange/80" strokeWidth={1.5} />
              </div>
            </div>
            <div className="text-center">
              <p className="text-swiggy-dark font-black text-xl tracking-tight">
                Always here to help
              </p>
              <p className="text-swiggy-text-muted text-xs font-bold uppercase tracking-widest mt-2">
                Response time: &lt; 24h
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-3 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            {!isAuthenticated && (
              <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800">
                {/* Keep the message user-focused so the experience feels polished and professional. */}
                Please sign in to send us a message. This helps us respond
                faster and keep your conversation connected to your account.{" "}
                <Link to="/login" className="font-bold underline underline-offset-2">
                  Sign in
                </Link>
                .
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-swiggy-dark ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  className="p-4 bg-swiggy-bg rounded-xl focus:outline-none focus:ring-2 focus:ring-swiggy-orange/30 transition-all border-none"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-swiggy-dark ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  className="p-4 bg-swiggy-bg rounded-xl focus:outline-none focus:ring-2 focus:ring-swiggy-orange/30 transition-all border-none"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-swiggy-dark ml-1">
                Subject
              </label>
              <select
                name="subject"
                className="p-4 bg-swiggy-bg rounded-xl focus:outline-none focus:ring-2 focus:ring-swiggy-orange/30 transition-all border-none appearance-none cursor-pointer"
                value={formData.subject}
                onChange={handleChange}
              >
                <option>General Inquiry</option>
                <option>Order Support</option>
                <option>Restaurant Partnership</option>
                <option>Career Opportunities</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-swiggy-dark ml-1">
                Your Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="How can we help you today?"
                value={formData.message}
                className="p-4 bg-swiggy-bg rounded-xl focus:outline-none focus:ring-2 focus:ring-swiggy-orange/30 transition-all border-none resize-none"
                required
                onChange={handleChange}
              ></textarea>
            </div>

            {errorMessage && (
              <p className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={loading || submitted || !isAuthenticated}
              className={`mt-4 bg-swiggy-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg cursor-pointer${
                loading || submitted || !isAuthenticated
                  ? "opacity-70 cursor-not-allowed"
                  : "hover:bg-orange-600 active:scale-95"
              }`}
            >
              {submitted ? "Message Sent!" : "Send Message"}
              {!submitted && <Send className="w-5 h-5" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
