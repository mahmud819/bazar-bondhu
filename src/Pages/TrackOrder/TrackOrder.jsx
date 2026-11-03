
import { useState } from "react";
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

// Demo order data
const demoOrders = {
  BB1234: {
    id: "BB1234",
    date: "03 November 2026",
    time: "10:30 AM",
    customer: "Mahmudur Rahman",
    address: "Dhanmondi, Dhaka",
    totalItems: 5,
    deliveryFee: 40,
    total: 540,
    status: 2,
    deliveryman: "Delivery Partner",
    phone: "+880 1XXXXXXXXX",
    items: [
      { name: "আলু", quantity: "২ কেজি" },
      { name: "পেঁয়াজ", quantity: "১ কেজি" },
      { name: "চাল", quantity: "৫ কেজি" },
      { name: "সয়াবিন তেল", quantity: "২ লিটার" },
      { name: "টমেটো", quantity: "১ কেজি" },
    ],
  },
};

// Tracking steps
const trackingSteps = [
  {
    title: "অর্ডার গ্রহণ",
    description: "আপনার অর্ডার গ্রহণ করা হয়েছে",
    icon: CheckCircle2,
  },
  {
    title: "বাজার করা হচ্ছে",
    description: "আমরা আপনার জন্য বাজার করছি",
    icon: ShoppingBasket,
  },
  {
    title: "ডেলিভারির জন্য প্রস্তুত",
    description: "আপনার অর্ডার প্রস্তুত",
    icon: Bike,
  },
  {
    title: "ডেলিভারি সম্পন্ন",
    description: "আপনার অর্ডার সফলভাবে পৌঁছে গেছে",
    icon: Package,
  },
];

function TrackOrder() {
  const [orderId, setOrderId] = useState("BB1234");
  const [order, setOrder] = useState(demoOrders.BB1234);
  const [error, setError] = useState("");

  // Search order
  const handleTrackOrder = (e) => {
    e.preventDefault();

    const searchedId = orderId.trim().toUpperCase();

    if (!searchedId) {
      setError("অনুগ্রহ করে আপনার Order ID লিখুন।");
      setOrder(null);
      return;
    }

    const foundOrder = demoOrders[searchedId];

    if (foundOrder) {
      setOrder(foundOrder);
      setError("");
    } else {
      setOrder(null);
      setError("এই Order ID-এর কোনো Demo Record পাওয়া যায়নি।");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 px-4 py-12 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
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
            আপনার Order ID দিয়ে অর্ডারের আপডেট দেখুন।
          </p>

        </div>

        {/* Search Order */}
        <form
          onSubmit={handleTrackOrder}
          className="mx-auto mb-12 flex max-w-2xl flex-col gap-3 rounded-full border border-blue-200 bg-white p-2 shadow-md sm:flex-row"
        >

          <div className="flex flex-1 items-center gap-3 px-4">
            <Search className="shrink-0 text-blue-700" size={23} />

            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="অর্ডার আইডি লিখুন (যেমন: BB1234)"
              className="w-full min-w-0 bg-transparent py-3 text-sm outline-none"
              aria-label="Order ID"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 rounded-full bg-green-600 px-8 py-3 font-bold text-white transition hover:bg-green-700"
          >
            <Search size={19} />
            Track Order
          </button>

        </form>

        {/* Error Message */}
        {error && (
          <div
            role="alert"
            className="mx-auto mb-8 max-w-2xl rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm font-semibold text-red-600"
          >
            {error}
          </div>
        )}

        {/* Tracking Details */}
        {order && (
          <>

            {/* Tracking Progress */}
            <section className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm sm:p-10">

              <div className="mb-10 text-center">
                <h2 className="text-2xl font-extrabold text-slate-900">
                  Order Progress
                </h2>

                <p className="mt-2 text-sm text-slate-500">
                  Order ID:{" "}
                  <span className="font-bold text-blue-700">
                    #{order.id}
                  </span>
                </p>
              </div>

              {/* Progress Timeline */}
              <div className="grid grid-cols-2 gap-7 md:grid-cols-4">

                {trackingSteps.map((step, index) => {
                  const Icon = step.icon;
                  const completed = index < order.status;
                  const active = index === order.status - 1;

                  return (
                    <div
                      key={step.title}
                      className="relative flex flex-col items-center text-center"
                    >

                      {/* Step Icon */}
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

              {/* Status Message */}
              <div className="mt-10 rounded-2xl bg-green-50 p-5 text-center">
                <p className="font-bold text-green-800">
                  {trackingSteps[order.status - 1].title}
                </p>

                <p className="mt-2 text-sm text-slate-600">
                  {trackingSteps[order.status - 1].description}
                </p>
              </div>

            </section>

            {/* Order and Delivery Details */}
            <section className="mt-7 grid gap-6 lg:grid-cols-3">

              {/* Order Information */}
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
                        {order.date}
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
                        {order.time}
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

                  {order.items.map((item) => (
                    <div
                      key={item.name}
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
                    মোট পণ্য
                  </span>

                  <span className="font-extrabold text-blue-800">
                    {order.totalItems} টি
                  </span>
                </div>

              </div>

              {/* Deliveryman Card */}
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
                    alt="BazarBondhu Delivery Man"
                    className="mb-5 h-52 w-full object-contain"
                  />

                  <h3 className="text-lg font-bold text-slate-900">
                    {order.deliveryman}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    BazarBondhu Delivery Partner
                  </p>

                  <a
                    href={`tel:${order.phone}`}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-3 font-bold text-white transition hover:bg-green-700"
                  >
                    <Phone size={19} />
                    Call Deliveryman
                  </a>

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
                    #{order.id}
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
