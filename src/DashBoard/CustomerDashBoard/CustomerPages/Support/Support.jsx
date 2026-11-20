
import React, { useState } from "react";

import {
  Headset,
  Mail,
  Phone,
  MessageCircle,
  Send,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Support = () => {

  const [openFaq, setOpenFaq] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "Go to My Orders from your dashboard and select View to check your order details and delivery status.",
    },
    {
      question: "How can I cancel my order?",
      answer:
        "You can request cancellation for eligible orders before they are dispatched. Contact our support team if cancellation is unavailable.",
    },
    {
      question: "How can I change my delivery address?",
      answer:
        "Visit your Address Book, add or edit an address, and select the address you want to use for your next order.",
    },
    {
      question: "What should I do if I receive a damaged product?",
      answer:
        "Contact our support team with your order ID and details of the damaged product so we can assist you.",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your support request API here
    console.log("Support Request:", formData);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="space-y-6">

      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Customer Support
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          We are here to help you with your shopping experience
        </p>
      </div>

      {/* Support Banner */}
      <div className="flex flex-col items-center justify-between gap-5 overflow-hidden rounded-2xl bg-gradient-to-r from-blue-100 to-green-100 p-6 sm:flex-row sm:p-8">

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            How can we help you?
          </h2>

          <p className="mt-2 max-w-lg text-sm text-gray-600">
            Have questions about your orders, payments or delivery?
            Our support team is ready to assist you.
          </p>
        </div>

        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-white text-blue-600 shadow-sm">
          <Headset size={42} />
        </div>

      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
            <Phone size={23} />
          </div>

          <h3 className="font-bold text-slate-800">
            Call Us
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            +880 1XXXXXXXXX
          </p>

        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600">
            <Mail size={23} />
          </div>

          <h3 className="font-bold text-slate-800">
            Email Us
          </h3>

          <p className="mt-1 break-all text-sm text-gray-500">
            support@bazarbondhu.com
          </p>

        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600">
            <MessageCircle size={23} />
          </div>

          <h3 className="font-bold text-slate-800">
            Live Support
          </h3>

          <p className="mt-1 text-sm text-gray-500">
            Contact our support team
          </p>

        </div>

      </div>

      {/* FAQ + Contact Form */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        {/* Frequently Asked Questions */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">

          <h2 className="mb-5 text-lg font-bold text-slate-800">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="rounded-xl border border-gray-100"
              >

                <button
                  onClick={() =>
                    setOpenFaq(openFaq === index ? -1 : index)
                  }
                  className="flex w-full items-center justify-between gap-3 p-4 text-left"
                >

                  <span className="text-sm font-semibold text-slate-700">
                    {faq.question}
                  </span>

                  {openFaq === index ? (
                    <ChevronUp size={19} className="shrink-0 text-blue-600" />
                  ) : (
                    <ChevronDown size={19} className="shrink-0 text-gray-400" />
                  )}

                </button>

                {openFaq === index && (

                  <div className="border-t border-gray-100 px-4 py-3">

                    <p className="text-sm leading-6 text-gray-500">
                      {faq.answer}
                    </p>

                  </div>

                )}

              </div>

            ))}

          </div>

        </div>

        {/* Contact Form */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm sm:p-6">

          <h2 className="mb-2 text-lg font-bold text-slate-800">
            Send Us a Message
          </h2>

          <p className="mb-5 text-sm text-gray-500">
            Fill in the form and our team will get back to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Your Name
              </label>

              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400"
              />
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Email Address
              </label>

              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Subject
              </label>

              <select
                required
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400"
              >
                <option value="">Select a subject</option>
                <option value="Order Issue">Order Issue</option>
                <option value="Payment Issue">Payment Issue</option>
                <option value="Delivery Issue">Delivery Issue</option>
                <option value="Product Issue">Product Issue</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-700">
                Your Message
              </label>

              <textarea
                required
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                className="w-full resize-none rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              <Send size={18} />
              Submit Request
            </button>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Support;
