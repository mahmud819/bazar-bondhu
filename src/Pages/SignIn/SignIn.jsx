
import { useState } from "react";
import { Link } from "react-router-dom";

import {
  UserRound,
  Mail,
  LockKeyhole,
  Eye,
  EyeOff,
  LogIn,
} from "lucide-react";
import groceryBag from '../../assets/Images/FreshGroceryBag.png'

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [message, setMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));

    setMessage("");
  };

  // Handle login submission
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login Data:", formData);

    setMessage(
      "Login form submitted. Connect your authentication API to continue."
    );
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
              Welcome to{" "}
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

        {/* RIGHT SIDE - SIGN IN FORM */}

        <section className="flex items-center justify-center">

          <div className="w-full max-w-[480px] rounded-3xl border border-blue-100 bg-white/95 p-6 shadow-xl sm:p-9">

            {/* Form Heading */}

            <div className="mb-8 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-md">
                <UserRound size={34} />
              </div>

              <h1 className="mt-4 text-3xl font-extrabold text-blue-950">
                Welcome Back!
              </h1>

              <h2 className="mt-3 text-lg font-bold text-slate-800">
                আবারও স্বাগতম, বাজার বন্ধুতে
              </h2>

              {/* Divider */}
              <div className="mx-auto mt-5 flex max-w-[280px] items-center gap-2">

                <span className="h-px flex-1 bg-slate-300" />

                <span className="h-1 w-12 rounded-full bg-green-600" />

                <span className="h-px flex-1 bg-slate-300" />

              </div>

            </div>

            {/* Login Form */}

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Email or Phone */}

              <div className="relative">

                <Mail
                  size={21}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                />

                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email or Phone Number"
                  required
                  autoComplete="username"
                  className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-4 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
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
                  autoComplete="current-password"
                  className="w-full rounded-xl border border-slate-300 py-4 pl-12 pr-12 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                {/* Show / Hide Password */}

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 transition hover:text-blue-700"
                >
                  {showPassword ? (
                    <EyeOff size={21} />
                  ) : (
                    <Eye size={21} />
                  )}
                </button>

              </div>

              {/* Remember Me and Forgot Password */}

              <div className="flex flex-wrap items-center justify-between gap-3">

                <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-700">

                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 cursor-pointer accent-blue-600"
                  />

                  Remember Me

                </label>

                <Link
                  to="/forgot-password"
                  className="text-sm font-semibold text-blue-700 underline transition hover:text-green-700"
                >
                  Forgot Password?
                </Link>

              </div>

              {/* Feedback Message */}

              {message && (
                <p
                  role="status"
                  className="rounded-xl bg-blue-50 p-3 text-sm text-blue-800"
                >
                  {message}
                </p>
              )}

              {/* Login Button */}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-full bg-green-600 py-4 text-lg font-bold text-white shadow-md transition duration-300 hover:bg-green-700 active:scale-[0.98]"
              >

                <LogIn size={23} />

                Login

              </button>

            </form>

            {/* OR Divider */}

            <div className="my-7 flex items-center gap-4">

              <span className="h-px flex-1 bg-slate-300" />

              <span className="font-semibold text-slate-600">
                or
              </span>

              <span className="h-px flex-1 bg-slate-300" />

            </div>

            {/* Sign Up Navigation */}

            <p className="text-center text-sm text-slate-700">

              Create a new account?

              <Link
                to="/signUp"
                className="ml-2 font-bold text-blue-700 transition hover:text-green-700"
              >
                Sign Up →
              </Link>

            </p>

          </div>

        </section>

      </div>

    </main>
  );
}

export default SignIn;
