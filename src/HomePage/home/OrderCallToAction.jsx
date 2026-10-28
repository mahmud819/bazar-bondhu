import { ArrowRight, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function OrderCallToAction() {
  return (
    <section className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 overflow-hidden rounded-3xl bg-gradient-to-r from-green-700 via-green-600 to-emerald-500 px-6 py-9 text-center text-white shadow-lg sm:flex-row sm:px-10 sm:text-left">
        <div>
          <p className="text-sm font-bold uppercase tracking-wider text-green-100">BazarBondhu</p>
          <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">আজই শুরু করুন বাজার বন্ধু-এর সাথে!</h2>
          <p className="mt-2 text-green-50">স্মার্ট বাজার, সহজ জীবন।</p>
        </div>
        <Link
          to="/order"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-green-800 transition hover:bg-green-50"
        >
          <ShoppingCart size={19} aria-hidden="true" />
          এখনই অর্ডার করুন
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
