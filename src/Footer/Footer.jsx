
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import logoImg from '../assets/Logo/logo.png'

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Track Order", path: "/track-order" },
  { name: "Contact Us", path: "/contact" },
];

const customerLinks = [
  { name: "My Account", path: "/login" },
  { name: "Place an Order", path: "/place-order" },
  { name: "My Orders", path: "/dashboard/my-orders" },
  { name: "Help & Support", path: "/contact" },
];

function Footer() {
  return (
    <footer className="bg-[#071c3d] text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">

        {/* Brand Section */}
        <div>
          <Link to="/" className="mb-5 flex flex-col items-center gap-3">
            <img
              src={logoImg}
              alt="BazarBondhu Logo"
              className="w-[100%] object-contain"
            />
            <p className="text-xs tracking-wider text-gray-300">
                SMART SHOPPING, BETTER LIVING
              </p>

            {/* <div>
              <h2 className="text-2xl font-extrabold">
                <span className="text-green-400">Bazar</span>
                <span className="text-blue-300">Bondhu</span>
              </h2>
              <p className="text-xs tracking-wider text-gray-300">
                SMART SHOPPING, BETTER LIVING
              </p>
            </div> */}
          </Link>

          <p className="max-w-xs text-sm leading-7 text-gray-300">
            আপনার বাজার, আমাদের দায়িত্ব!
            বাজারের প্রয়োজনীয় পণ্য ঘরে বসেই অর্ডার করুন।
            আমরা আপনার বাজার করে পৌঁছে দেব আপনার দরজায়।
          </p>

          {/* Social Media */}
          <div className="mt-6 flex gap-3">
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="rounded-full bg-white/10 p-3 transition hover:bg-blue-600"
            >
              {/* <Facebook  /> */}
              <FaFacebook size={19} />
            </a>

            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-3 transition hover:bg-pink-600"
            >
              <BsInstagram size={19} />
            </a>

            <a
              href="https://youtube.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="rounded-full bg-white/10 p-3 transition hover:bg-red-600"
            >
              <BsYoutube size={19} />
            </a>

            <a
              href="https://whatsapp.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="rounded-full bg-white/10 p-3 transition hover:bg-green-600"
            >
              <MessageCircle size={19} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-6 text-xl font-bold">
            Quick Links
          </h3>

          <ul className="space-y-4">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="flex items-center gap-2 text-sm text-gray-300 transition hover:translate-x-1 hover:text-green-400"
                >
                  <ArrowRight size={15} className="text-green-400" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Support */}
        <div>
          <h3 className="mb-6 text-xl font-bold">
            Customer Support
          </h3>

          <ul className="space-y-4">
            {customerLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="flex items-center gap-2 text-sm text-gray-300 transition hover:translate-x-1 hover:text-green-400"
                >
                  <ArrowRight size={15} className="text-green-400" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="mb-6 text-xl font-bold">
            Contact Us
          </h3>

          <ul className="space-y-5 text-sm text-gray-300">

            <li className="flex items-start gap-3">
              <MapPin
                size={20}
                className="shrink-0 text-green-400"
              />
              <span>
                Bangladesh
                <br />
                <span className="text-xs text-gray-400">
                  Your service area
                </span>
              </span>
            </li>

            <li className="flex items-center gap-3">
              <Phone
                size={20}
                className="shrink-0 text-green-400"
              />
              <a href="tel:+8801XXXXXXXXX" className="hover:text-green-400">
                +880 1XXXXXXXXX
              </a>
            </li>

            <li className="flex items-center gap-3">
              <Mail
                size={20}
                className="shrink-0 text-green-400"
              />
              <a
                href="mailto:your-email@example.com"
                className="break-all hover:text-green-400"
              >
                your-email@example.com
              </a>
            </li>
          </ul>

          <div className="mt-6 rounded-xl border border-green-500/30 bg-green-500/10 p-4">
            <h4 className="font-bold text-green-400">
              Need Help?
            </h4>
            <p className="mt-1 text-xs leading-5 text-gray-300">
              Our support team is here to help you.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center sm:flex-row lg:px-8">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()}{" "}
            <span className="font-bold text-green-400">
              BazarBondhu
            </span>
            . All Rights Reserved.
          </p>

          <div className="flex gap-5 text-sm text-gray-400">
            <Link to="/privacy-policy" className="hover:text-green-400">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-green-400">
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
