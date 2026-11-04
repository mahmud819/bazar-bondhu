
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  UserRound,
  UserPlus,
  Smartphone,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
} from "lucide-react";
import groceryBag from '../../assets/Images/FreshGroceryBag.png'

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("error");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setMessage("");
  };

  // Handle registration
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check password matching
    if (formData.password !== formData.confirmPassword) {
      setMessageType("error");
      setMessage("Password এবং Confirm Password মিলছে না।");
      return;
    }

    // Check password length
    if (formData.password.length < 8) {
      setMessageType("error");
      setMessage("Password কমপক্ষে ৮ অক্ষরের হতে হবে।");
      return;
    }

    // Check terms and conditions
    if (!formData.terms) {
      setMessageType("error");
      setMessage("অনুগ্রহ করে Terms & Conditions গ্রহণ করুন।");
      return;
    }

    // Registration data
    const registrationData = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      password: formData.password,
    };

    console.log("Registration Data:", registrationData);

    setMessageType("success");
    setMessage(
      "Registration form successfully validated. Connect your backend to create an account."
    );

    // Clear form after successful validation
    setFormData({
      name: "",
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    });
  };

  return (
    <main className="min-h-screen overflow-hidden bg-gradient-to-br from-sky-100 via-blue-50 to-white">

      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-8 px-4 py-10 sm:px-8 lg:grid-cols-2 lg:gap-12">

        {/* LEFT SIDE - GROCERY IMAGE */}

        <section className="flex flex-col items-center justify-center">

          <div className="relative w-full max-w-[550px]">

            {/* Background Decoration */}
            <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-200/50 blur-3xl sm:h-96 sm:w-96" />

            {/* Grocery Image */}
            <img
              src={groceryBag}
              alt="BazarBondhu Grocery Shopping"
              className="relative z-10 mx-auto max-h-[550px] w-full object-contain"
            />

          </div>

          {/* Brand Text */}
          <div className="relative z-10 -mt-2 text-center">

            <h2 className="text-2xl font-extrabold text-blue-950 sm:text-3xl">
              Join{" "}
              <span className="text-green-600">
                BazarBondhu
              </span>
            </h2>

            <p className="mt-3 text-base font-medium text-slate-600">
              আপনার বাজার, আমাদের দায়িত্ব!
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Smart Shopping, Better Living.
            </p>

          </div>

        </section>

        {/* RIGHT SIDE - SIGN UP FORM */}

        <section className="flex items-center justify-center">

          <div className="w-full max-w-[480px] rounded-3xl border border-blue-100 bg-white/95 p-6 shadow-xl backdrop-blur-sm sm:p-9">

            {/* Form Heading */}

            <div className="mb-6 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-md">
                <UserPlus size={34} />
              </div>

              <h1 className="mt-4 text-3xl font-extrabold text-blue-950">
                Create Account
              </h1>

              <h2 className="mt-2 text-lg font-bold text-slate-800">
                আপনার নতুন অ্যাকাউন্ট তৈরি করুন
              </h2>

              {/* Divider */}
              <div className="mx-auto mt-5 flex max-w-[270px] items-center gap-2">
                <span className="h-px flex-1 bg-slate-300" />
                <span className="h-1 w-12 rounded-full bg-green-600" />
                <span className="h-px flex-1 bg-slate-300" />
              </div>

            </div>

            {/* Registration Form */}

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Full Name */}

              <div className="relative">

                <UserRound
                  size={21}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-slate-300 py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              {/* Phone Number */}

              <div className="relative">

                <Smartphone
                  size={21}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  autoComplete="tel"
                  className="w-full rounded-xl border border-slate-300 py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              {/* Email Address */}

              <div className="relative">

                <Mail
                  size={21}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-slate-300 py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              {/* Password */}

              <div className="relative">

                <LockKeyhole
                  size={21}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  className="w-full rounded-xl border border-slate-300 py-3.5 pl-12 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-700"
                >
                  {showPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

              {/* Confirm Password */}

              <div className="relative">

                <LockKeyhole
                  size={21}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                  minLength={8}
                  autoComplete="new-password"
                  className="w-full rounded-xl border border-slate-300 py-3.5 pl-12 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 hover:text-blue-700"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>

              </div>

              {/* Terms and Conditions */}

              <label className="flex cursor-pointer items-start gap-2 text-sm text-slate-700">

                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="mt-1 h-4 w-4 cursor-pointer accent-blue-600"
                />

                <span>
                  I agree to the{" "}

                  <Link
                    to="/terms"
                    className="font-semibold text-blue-700 underline hover:text-green-700"
                  >
                    Terms & Conditions
                  </Link>
                </span>

              </label>

              {/* Feedback Message */}

              {message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`rounded-xl p-3 text-sm ${
                    messageType === "success"
                      ? "bg-green-50 text-green-800"
                      : "bg-red-50 text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}

              {/* Create Account Button */}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-green-600 py-3.5 text-lg font-bold text-white shadow-md transition hover:bg-green-700 active:scale-[0.98]"
              >

                <UserPlus size={22} />

                Create Account

              </button>

            </form>

            {/* Login Navigation */}

            <p className="mt-6 text-center text-sm text-slate-700">

              Already have an account?

              <Link
                to="/signIn"
                className="ml-2 font-bold text-blue-700 transition hover:text-green-700"
              >
                Login →
              </Link>

            </p>

          </div>

        </section>

      </div>

      {/* Decorative Bottom Waves */}

      <div className="pointer-events-none fixed bottom-0 left-0 -z-0 w-full">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="h-20 w-full sm:h-24"
        >
          <path
            d="M0 55 C300 120 500 10 750 65 C1000 115 1200 30 1440 60 L1440 120 L0 120Z"
            fill="#16a34a"
          />
          <path
            d="M0 85 C250 20 500 110 800 65 C1080 20 1200 110 1440 40 L1440 120 L0 120Z"
            fill="#0755c9"
          />
        </svg>
      </div>

    </main>
  );
}

export default SignUp;
