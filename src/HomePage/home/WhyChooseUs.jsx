import { ShieldCheck, Zap, BadgeCheck, Headset, Smile } from "lucide-react";

const benefits = [
  { title: "নিরাপদ সার্ভিস", subtitle: "Safe & Secure", icon: ShieldCheck },
  { title: "দ্রুত ডেলিভারি", subtitle: "Fast Delivery", icon: Zap },
  { title: "ন্যায্য দাম", subtitle: "Fair Prices", icon: BadgeCheck },
  { title: "সহায়তা", subtitle: "Customer Support", icon: Headset },
  { title: "গ্রাহক সন্তুষ্টি", subtitle: "Happy Customers", icon: Smile },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-green-50 via-white to-sky-50 p-6 sm:p-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-1.5 text-sm font-bold text-green-800">
            Why Choose BazarBondhu?
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            কেন বাজার বন্ধু বেছে নেবেন?
          </h2>
          <p className="mt-3 text-slate-600">
            আপনার সময় বাঁচাতে ও বাজারকে সহজ করতে আমরা পাশে আছি।
          </p>
        </div>

        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map(({ title, subtitle, icon: Icon }) => (
            <article key={title} className="rounded-2xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-100">
              <Icon className="mx-auto text-green-600" size={34} aria-hidden="true" />
              <h3 className="mt-4 font-bold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-500">{subtitle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
