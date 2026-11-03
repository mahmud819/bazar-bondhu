
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  Headset,
} from "lucide-react";
import { FaFacebook, FaInstagramSquare } from "react-icons/fa";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone Number",
    value: "আপনার ফোন নম্বর যোগ করুন",
    subtitle: "সকাল ৮টা - রাত ১০টা",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Mail,
    title: "Email Address",
    value: "your-email@example.com",
    subtitle: "আমাদের ইমেইল",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    icon: MapPin,
    title: "Our Location",
    value: "Bangladesh",
    subtitle: "আপনার সার্ভিস এলাকা",
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    icon: Clock,
    title: "Working Hours",
    value: "Everyday",
    subtitle: "সকাল ৮টা - রাত ১০টা",
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [feedback, setFeedback] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setFeedback("");
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Information:", formData);

    setFeedback(
      "ধন্যবাদ! আপনার বার্তাটি প্রস্তুত হয়েছে। Backend সংযুক্ত করলে এটি পাঠানো যাবে।"
    );

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 px-4 py-12 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <div className="mb-12 text-center">

          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-0.5 w-12 bg-green-600" />

            <span className="rounded-full bg-green-700 px-5 py-2 text-sm font-bold text-white">
              Contact Us
            </span>

            <span className="h-0.5 w-12 bg-green-600" />
          </div>

          <h1 className="text-3xl font-extrabold text-blue-800 sm:text-4xl">
            যোগাযোগ করুন
          </h1>

          <p className="mt-3 text-slate-600">
            আপনার যেকোনো প্রশ্ন বা পরামর্শের জন্য আমরা পাশে আছি।
          </p>

        </div>

        {/* Main Contact Layout */}
        <div className="grid items-start gap-8 lg:grid-cols-5">

          {/* Left Side - Contact Information */}
          <div className="lg:col-span-2">

            <h2 className="mb-6 text-2xl font-extrabold text-slate-900">
              আমাদের সাথে যোগাযোগ
            </h2>

            <p className="mb-7 leading-7 text-slate-600">
              BazarBondhu সম্পর্কে কোনো প্রশ্ন, অভিযোগ অথবা পরামর্শ
              থাকলে আমাদের সঙ্গে যোগাযোগ করুন। আমরা আপনাকে
              সাহায্য করতে প্রস্তুত।
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">

              {contactInfo.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-2xl border border-green-100 bg-white p-4 shadow-sm transition hover:shadow-md"
                  >
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${item.bg} ${item.color}`}
                    >
                      <Icon size={25} />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-bold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 break-words text-sm font-semibold text-blue-800">
                        {item.value}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

            {/* Social Media */}
            <div className="mt-7 rounded-2xl border border-green-100 bg-white p-5 shadow-sm">

              <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
                <MessageCircle size={21} className="text-green-600" />
                Follow Us
              </h3>

              <div className="flex gap-3">

                <a
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="rounded-full bg-blue-100 p-3 text-blue-700 transition hover:bg-blue-600 hover:text-white"
                >
                  <FaFacebook size={21} />
                </a>

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="rounded-full bg-pink-100 p-3 text-pink-600 transition hover:bg-pink-600 hover:text-white"
                >
                  <FaInstagramSquare size={21} />
                </a>

                <a
                  href="https://wa.me/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="rounded-full bg-green-100 p-3 text-green-700 transition hover:bg-green-600 hover:text-white"
                >
                  <MessageCircle size={21} />
                </a>

              </div>

            </div>

          </div>

          {/* Right Side - Contact Form */}
          <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-md sm:p-8 lg:col-span-3">

            <div className="mb-7 flex items-center gap-3">

              <div className="rounded-xl bg-green-100 p-3 text-green-700">
                <Headset size={27} />
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-slate-900 sm:text-2xl">
                  Send Us a Message
                </h2>

                <p className="mt-1 text-sm text-slate-500">
                  আপনার বার্তা আমাদের জানান
                </p>
              </div>

            </div>

            <form onSubmit={handleSubmit}>

              {/* Name and Email */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-bold text-slate-800"
                  >
                    আপনার নাম <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="আপনার নাম লিখুন"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-slate-800"
                  >
                    ইমেইল ঠিকানা <span className="text-red-500">*</span>
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="আপনার ইমেইল লিখুন"
                    required
                    className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                  />
                </div>

              </div>

              {/* Subject */}
              <div className="mt-5">

                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  বিষয় <span className="text-red-500">*</span>
                </label>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                >
                  <option value="">বিষয় নির্বাচন করুন</option>
                  <option value="Order Related">অর্ডার সংক্রান্ত</option>
                  <option value="Delivery Related">ডেলিভারি সংক্রান্ত</option>
                  <option value="Payment Related">পেমেন্ট সংক্রান্ত</option>
                  <option value="Complaint">অভিযোগ</option>
                  <option value="Suggestion">পরামর্শ</option>
                  <option value="Other">অন্যান্য</option>
                </select>

              </div>

              {/* Message */}
              <div className="mt-5">

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-slate-800"
                >
                  আপনার বার্তা <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="আপনার বার্তা লিখুন..."
                  rows={6}
                  required
                  className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-green-500 focus:ring-2 focus:ring-green-100"
                />

              </div>

              {/* Feedback */}
              {feedback && (
                <p
                  role="status"
                  className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800"
                >
                  {feedback}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-green-600 to-green-700 px-6 py-4 font-bold text-white shadow-md transition hover:from-green-700 hover:to-green-800 active:scale-[0.99]"
              >
                <Send size={20} />
                মেসেজ পাঠান
              </button>

            </form>

          </div>

        </div>

        {/* Map Section */}
        <section className="mt-12 overflow-hidden rounded-3xl border border-green-100 bg-white p-5 shadow-sm sm:p-7">

          <div className="mb-5 text-center">
            <h2 className="text-2xl font-extrabold text-slate-900">
              আমাদের অবস্থান
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              আমাদের সার্ভিস এরিয়া সম্পর্কে জানতে যোগাযোগ করুন।
            </p>
          </div>

          {/* Replace this placeholder with your actual Google Maps embed */}
          <div className="flex min-h-[280px] items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 p-6 text-center">

            <div>
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white text-green-700 shadow-md">
                <MapPin size={34} />
              </div>

              <h3 className="mt-4 text-xl font-bold text-blue-900">
                BazarBondhu
              </h3>

              <p className="mt-2 text-sm text-slate-600">
                Your Local Grocery Delivery Partner
              </p>

              <p className="mt-2 text-sm text-slate-500">
                Bangladesh
              </p>

            </div>

          </div>

        </section>

      </div>

    </main>
  );
}
