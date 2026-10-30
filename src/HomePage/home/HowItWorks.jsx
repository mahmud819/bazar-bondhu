import { ClipboardList, Store, Bike, ArrowRight } from "lucide-react";
import SharedTitle from "../../SharedComponents/SharedTitle/SharedTitle";

const steps = [
  {
    number: "01",
    title: "অর্ডার দিন",
    description: "আপনার পছন্দের পণ্য ও ডেলিভারি ঠিকানা জানান।",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "বাজার থেকে কেনা",
    description: "আমাদের প্রতিনিধি বাজার থেকে পণ্য সংগ্রহ করবেন।",
    icon: Store,
  },
  {
    number: "03",
    title: "ডেলিভারি পান",
    description: "আপনার ঠিকানায় পণ্য পৌঁছে দেওয়া হবে।",
    icon: Bike,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-sky-50/70 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          {/* <span className="inline-flex rounded-full bg-green-100 px-4 py-1.5 text-sm font-bold text-green-800">
            How It Works
          </span> */}
          <SharedTitle title={"How It Works"}></SharedTitle>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            মাত্র ৩টি ধাপে অর্ডার করুন
          </h2>
          <p className="mt-3 text-slate-600">সহজ অর্ডার, নির্ভরযোগ্য কেনাকাটা, সুবিধাজনক ডেলিভারি।</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map(({ number, title, description, icon: Icon }, index) => (
            <div key={number} className="relative">
              <article className="h-full rounded-3xl border border-sky-100 bg-white p-7 text-center shadow-sm">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Icon size={30} aria-hidden="true" />
                </div>
                <p className="mt-5 text-sm font-extrabold tracking-widest text-green-700">STEP {number}</p>
                <h3 className="mt-2 text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{description}</p>
              </article>
              {index < steps.length - 1 && (
                <ArrowRight
                  className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-green-600 md:block"
                  size={28}
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
