import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-[80vh] bg-white py-16 px-4 sm:px-8 flex flex-col items-center">
      {/* Header */}
      <div className="max-w-4xl text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-swiggy-dark mb-4">
          Get in <span className="text-swiggy-orange">Touch</span>
        </h1>
        <p className="text-swiggy-text-muted text-lg">
          Have a question or feedback? We'd love to hear from you. 
          Our team typically responds within 24 hours.
        </p>
      </div>

      <div className="w-full max-w-6xl grid md:grid-cols-5 gap-12 bg-swiggy-bg/30 p-4 md:p-12 rounded-[40px]">
        {/* Contact Info */}
        <div className="md:col-span-2 flex flex-col gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-sm">
            <h2 className="text-2xl font-bold text-swiggy-dark mb-6">Contact Information</h2>
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-swiggy-orange/10 rounded-xl text-swiggy-orange">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-swiggy-dark">Email Us</p>
                  <p className="text-swiggy-text-muted text-sm">support@namastefood.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-swiggy-orange/10 rounded-xl text-swiggy-orange">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-swiggy-dark">Call Us</p>
                  <p className="text-swiggy-text-muted text-sm">+91 1800-FOOD-LOVE</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-swiggy-orange/10 rounded-xl text-swiggy-orange">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold text-swiggy-dark">Headquarters</p>
                  <p className="text-swiggy-text-muted text-sm">
                    123 Culinary Drive, Block 4,<br />
                    Indiranagar, Bangalore - 560038
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-1 items-center justify-center text-[120px] opacity-20 select-none grayscale">
             🤝
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-3 bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-swiggy-dark ml-1">Full Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="p-4 bg-swiggy-bg rounded-xl focus:outline-none focus:ring-2 focus:ring-swiggy-orange/30 transition-all border-none"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-swiggy-dark ml-1">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com"
                  className="p-4 bg-swiggy-bg rounded-xl focus:outline-none focus:ring-2 focus:ring-swiggy-orange/30 transition-all border-none"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-swiggy-dark ml-1">Subject</label>
              <select className="p-4 bg-swiggy-bg rounded-xl focus:outline-none focus:ring-2 focus:ring-swiggy-orange/30 transition-all border-none appearance-none cursor-pointer">
                <option>General Inquiry</option>
                <option>Order Support</option>
                <option>Restaurant Partnership</option>
                <option>Career Opportunities</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-swiggy-dark ml-1">Your Message</label>
              <textarea 
                rows="5" 
                placeholder="How can we help you today?"
                className="p-4 bg-swiggy-bg rounded-xl focus:outline-none focus:ring-2 focus:ring-swiggy-orange/30 transition-all border-none resize-none"
                required
              ></textarea>
            </div>

            <button 
              type="submit"
              className="mt-4 bg-swiggy-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-all transform active:scale-95 shadow-lg cursor-pointer"
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
