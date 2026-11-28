
import { useState } from "react";
import axios from "axios";

import {
  Search,
  Package,
  ShoppingBasket,
  Bike,
  CheckCircle2,
  MapPin,
  CalendarDays,
  Clock3,
  Phone,
  ClipboardList,
} from "lucide-react";
import useAxiosPublic from "../../Hooks/CustomHooks/UseAxiosPublic/useAxiosPublic";

// const API_URL = import.meta.env.VITE_API_URL;
const axiosPublic = useAxiosPublic();

// Tracking steps
const trackingSteps = [
  {
    status: "pending",
    title: "অর্ডার গ্রহণ",
    description: "আপনার অর্ডার গ্রহণ করা হয়েছে",
    icon: CheckCircle2,
  },
  {
    status: "shopping",
    title: "বাজার করা হচ্ছে",
    description: "আমরা আপনার জন্য বাজার করছি",
    icon: ShoppingBasket,
  },
  {
    status: "ready_for_delivery",
    title: "ডেলিভারির জন্য প্রস্তুত",
    description: "আপনার অর্ডার প্রস্তুত",
    icon: Bike,
  },
  {
    status: "delivered",
    title: "ডেলিভারি সম্পন্ন",
    description: "আপনার অর্ডার সফলভাবে পৌঁছে গেছে",
    icon: Package,
  },
];

function TrackOrder() {
  const [orderId, setOrderId] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const [order, setOrder] = useState(null);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Track order
  const handleTrackOrder = async (e) => {
    e.preventDefault();

    setError("");
    setOrder(null);
    console.log(orderId,customerPhone)

    if (!orderId.trim() || !customerPhone.trim()) {
      setError("অনুগ্রহ করে Order ID এবং Phone Number লিখুন।");
      return;
    }

    try {
      setLoading(true);

      const response = await axiosPublic.post(
        '/track-order',
        {
          orderId: orderId.trim(),
          customerPhone: customerPhone.trim(),
        }
      );

      if (response.data.success) {
        setOrder(response.data.order);
        setError("");
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setOrder(null);

      console.log(err);
      setError(
        err.response?.data?.message ||
          "অর্ডার খুঁজে পাওয়া যায়নি। আবার চেষ্টা করুন।"
      );
    } finally {
      setLoading(false);
    }
  };

  // Current status index
  const currentStatusIndex = trackingSteps.findIndex(
    (step) => step.status === order?.status
  );

  const isCancelled = order?.status === "cancelled";

  const formatDate = (date) => {
    if (!date) return "Not available";

    return new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  const formatTime = (date) => {
    if (!date) return "Not available";

    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 px-4 py-12 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 text-center">

          <div className="mb-4 flex items-center justify-center gap-4">
            <span className="h-0.5 w-12 bg-green-600" />

            <span className="rounded-full bg-green-700 px-5 py-2 text-sm font-bold text-white">
              Track Your Order
            </span>

            <span className="h-0.5 w-12 bg-green-600" />
          </div>

          <h1 className="text-3xl font-extrabold text-blue-800 sm:text-4xl">
            আপনার অর্ডারের বর্তমান অবস্থা জানুন
          </h1>

          <p className="mt-3 text-slate-600">
            Order ID এবং Phone Number দিয়ে অর্ডারের আপডেট দেখুন।
          </p>
        </div>

        {/* Search Form */}
        <form
          onSubmit={handleTrackOrder}
          className="mx-auto mb-12 max-w-2xl rounded-3xl border border-blue-200 bg-white p-5 shadow-md"
        >

          <div className="mb-4 flex items-center gap-3 rounded-xl bg-slate-50 px-4">
            <Search className="shrink-0 text-blue-700" size={22} />

            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Order ID (যেমন: #BB000001)"
              className="w-full bg-transparent py-4 text-sm outline-none"
              aria-label="Order ID"
              required
            />
          </div>

          <div className="mb-4 flex items-center gap-3 rounded-xl bg-slate-50 px-4">

            <Phone className="shrink-0 text-blue-700" size={21} />

            <input
              type="tel"
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder="অর্ডারের সময় ব্যবহৃত Phone Number"
              className="w-full bg-transparent py-4 text-sm outline-none"
              aria-label="Customer phone number"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-bold text-white transition hover:bg-green-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Search size={19} />

            {loading ? "Searching..." : "Track Order"}
          </button>

        </form>

        {/* Error */}
        {error && (
          <div
            role="alert"
            className="mx-auto mb-8 max-w-2xl rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm font-semibold text-red-600"
          >
            {error}
          </div>
        )}

        {/* Order Details */}
        {order && (
          <>

            {/* Order Progress */}
            <section className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-10">

              <div className="mb-10 text-center">

                <h2 className="text-2xl font-extrabold text-slate-900">
                  Order Progress
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Order ID:{" "}
                  <span className="font-bold text-blue-700">
                    {order.id}
                  </span>
                </p>

              </div>

              {isCancelled ? (
                <div className="rounded-2xl bg-red-50 p-6 text-center">
                  <h3 className="text-xl font-bold text-red-700">
                    অর্ডার বাতিল করা হয়েছে
                  </h3>
                  <p className="mt-2 text-sm text-red-600">
                    এই অর্ডারটি বর্তমানে বাতিল অবস্থায় রয়েছে।
                  </p>
                </div>
              ) : (
                <>
                  {/* Progress Timeline */}
                  <div className="grid grid-cols-2 gap-7 md:grid-cols-4">

                    {trackingSteps.map((step, index) => {
                      const Icon = step.icon;

                      const completed =
                        currentStatusIndex >= index;

                      const active =
                        currentStatusIndex === index;

                      return (
                        <div
                          key={step.status}
                          className="flex flex-col items-center text-center"
                        >

                          <div
                            className={`flex h-16 w-16 items-center justify-center rounded-full border-4 transition ${
                              completed
                                ? "border-green-500 bg-green-600 text-white"
                                : "border-slate-200 bg-blue-50 text-blue-400"
                            }`}
                          >
                            <Icon size={29} />
                          </div>

                          <h3
                            className={`mt-4 text-sm font-bold sm:text-base ${
                              completed
                                ? "text-green-700"
                                : "text-slate-500"
                            }`}
                          >
                            {step.title}
                          </h3>

                          <p className="mt-2 max-w-[180px] text-xs leading-5 text-slate-500">
                            {active
                              ? "বর্তমানে এই ধাপে রয়েছে"
                              : completed
                                ? step.description
                                : "পরবর্তী ধাপ"}
                          </p>

                        </div>
                      );
                    })}

                  </div>

                  {/* Current Status */}
                  <div className="mt-10 rounded-2xl bg-green-50 p-5 text-center">

                    <p className="font-bold text-green-800">
                      {trackingSteps[currentStatusIndex]?.title}
                    </p>

                    <p className="mt-2 text-sm text-slate-600">
                      {trackingSteps[currentStatusIndex]?.description}
                    </p>

                  </div>
                </>
              )}

              {/* Tracking History */}
              {order.trackingHistory?.length > 0 && (
                <div className="mt-8 border-t border-slate-100 pt-6">

                  <h3 className="mb-4 font-bold text-slate-900">
                    Order Update History
                  </h3>

                  <div className="space-y-4">
                    {[...order.trackingHistory]
                      .reverse()
                      .map((history, index) => (
                        <div
                          key={`${history.status}-${index}`}
                          className="flex gap-3"
                        >
                          <CheckCircle2
                            className="mt-1 shrink-0 text-green-600"
                            size={19}
                          />

                          <div>
                            <p className="text-sm font-semibold text-slate-800">
                              {history.message}
                            </p>

                            <p className="mt-1 text-xs text-slate-500">
                              {formatDate(history.updatedAt)} at{" "}
                              {formatTime(history.updatedAt)}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>

                </div>
              )}

            </section>

            {/* Order Information */}
            <section className="mt-7 grid gap-6 lg:grid-cols-3">

              <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm lg:col-span-2">

                <div className="mb-6 flex items-center gap-3">

                  <div className="rounded-xl bg-green-100 p-3 text-green-700">
                    <ClipboardList size={25} />
                  </div>

                  <h2 className="text-xl font-extrabold text-slate-900">
                    অর্ডার সারাংশ
                  </h2>

                </div>

                <div className="grid gap-4 sm:grid-cols-2">

                  <div className="flex items-center gap-3">
                    <CalendarDays className="text-blue-600" size={21} />

                    <div>
                      <p className="text-xs text-slate-500">
                        অর্ডারের তারিখ
                      </p>

                      <p className="text-sm font-bold text-slate-800">
                        {formatDate(order.date)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock3 className="text-blue-600" size={21} />

                    <div>
                      <p className="text-xs text-slate-500">
                        অর্ডারের সময়
                      </p>

                      <p className="text-sm font-bold text-slate-800">
                        {formatTime(order.date)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:col-span-2">
                    <MapPin className="text-blue-600" size={21} />

                    <div>
                      <p className="text-xs text-slate-500">
                        ডেলিভারি ঠিকানা
                      </p>

                      <p className="text-sm font-bold text-slate-800">
                        {order.address}
                      </p>
                    </div>
                  </div>

                </div>

                <div className="my-6 border-t border-slate-100" />

                <h3 className="mb-4 font-bold text-slate-900">
                  অর্ডার করা পণ্য
                </h3>

                <div className="space-y-3">

                  {order.items.map((item, index) => (
                    <div
                      key={`${item.name}-${index}`}
                      className="flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3"
                    >

                      <span className="text-sm font-medium text-slate-700">
                        {item.name}
                      </span>

                      <span className="text-sm font-bold text-blue-700">
                        {item.quantity}
                      </span>

                    </div>
                  ))}

                </div>

                <div className="mt-5 flex items-center justify-between rounded-xl bg-blue-50 p-4">

                  <span className="font-bold text-blue-900">
                    মোট পণ্যের ধরন
                  </span>

                  <span className="font-extrabold text-blue-800">
                    {order.totalItems} টি
                  </span>

                </div>

              </div>

              {/* Deliveryman */}
              <div className="flex flex-col overflow-hidden rounded-3xl border border-green-100 bg-white shadow-sm">

                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white">

                  <h2 className="text-xl font-extrabold">
                    আপনার ডেলিভারিম্যান
                  </h2>

                  <p className="mt-2 text-sm text-blue-100">
                    আপনার অর্ডার পৌঁছে দিতে প্রস্তুত
                  </p>

                </div>

                <div className="flex flex-1 flex-col items-center justify-center p-6">

                  <img
                    src="/images/deliveryman.png"
                    alt="Bazar Bondhu Delivery Man"
                    className="mb-5 h-52 w-full object-contain"
                  />

                  <h3 className="text-lg font-bold text-slate-900">
                    {order.deliveryman}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Bazar Bondhu Delivery Partner
                  </p>

                  {order.phone && (
                    <a
                      href={`tel:${order.phone}`}
                      className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700"
                    >
                      <Phone size={19} />
                      Call Deliveryman
                    </a>
                  )}

                </div>

              </div>

            </section>

            {/* Payment Summary */}
            <section className="mt-7 rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">

              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

                <div>
                  <h2 className="text-xl font-extrabold text-slate-900">
                    Payment Summary
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    আপনার অর্ডারের পেমেন্ট বিবরণ
                  </p>
                </div>

                <div className="rounded-2xl bg-blue-50 px-7 py-5 text-center">

                  <p className="text-sm font-medium text-blue-700">
                    মোট আনুমানিক মূল্য
                  </p>

                  <p className="mt-1 text-3xl font-extrabold text-blue-800">
                    ৳ {order.total}
                  </p>

                </div>

              </div>

              <div className="mt-5 flex flex-wrap gap-5 border-t border-slate-100 pt-5 text-sm">

                <p className="text-slate-600">
                  Delivery Fee:

                  <span className="ml-2 font-bold text-slate-900">
                    ৳ {order.deliveryFee}
                  </span>
                </p>

                <p className="text-slate-600">
                  Order ID:

                  <span className="ml-2 font-bold text-blue-700">
                    {order.id}
                  </span>
                </p>

              </div>

            </section>

          </>
        )}

      </div>

    </main>
  );
}

export default TrackOrder;
