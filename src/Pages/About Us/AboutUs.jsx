
import { Link } from "react-router-dom";

import {
  ShoppingBag,
  ShieldCheck,
  Clock,
  Headset,
  Target,
  Eye,
  HeartHandshake,
  Truck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import DeliveryManImg from '../../assets/Images/Cheerful Delivery Shopper with Groceries.png'

const features = [
  {
    icon: ShieldCheck,
    title: "বিশ্বস্ত সার্ভিস",
    subtitle: "আপনার আস্থা আমাদের শক্তি",
    description:
      "আপনার চাহিদা অনুযায়ী যত্নসহকারে বাজার করার চেষ্টা করি।",
  },
  {
    icon: Clock,
    title: "সময় সাশ্রয়",
    subtitle: "ঘরে বসেই অর্ডার করুন",
    description:
      "ব্যস্ত জীবনে বাজার করার ঝামেলা কমিয়ে আপনার সময় বাঁচাতে সাহায্য করি।",
  },
  {
    icon: Headset,
    title: "গ্রাহক সেবা",
    subtitle: "সবসময় আপনার পাশে",
    description:
      "অর্ডার ও ডেলিভারি সংক্রান্ত প্রয়োজনে আমাদের সঙ্গে যোগাযোগ করতে পারবেন।",
  },
];

const services = [
  "দৈনন্দিন বাজার ও তাজা সবজি",
  "চাল, ডাল, তেল ও মসলা",
  "ঘরোয়া ও ব্যক্তিগত যত্নের পণ্য",
  "আপনার পছন্দের অন্যান্য প্রয়োজনীয় পণ্য",
];

function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">

      {/* About Hero Section */}
      <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">

          {/* Left Content */}
          <div>

            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-800">
              <ShoppingBag size={18} />
              About BazarBondhu
            </div>

            <h1 className="text-4xl font-extrabold leading-tight text-blue-900 sm:text-5xl">
              আমাদের{" "}
              <span className="text-green-600">সম্পর্কে</span>
            </h1>

            <h2 className="mt-4 text-xl font-bold text-slate-800">
              BazarBondhu – আপনার বিশ্বস্ত বাজার সঙ্গী
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              BazarBondhu হলো একটি আধুনিক অনলাইন বাজার ও
              ডেলিভারি সার্ভিসের ধারণা। যেখানে আপনি সহজেই ঘরে
              বসে আপনার প্রয়োজনীয় পণ্যের তালিকা দিতে পারবেন।
              আমাদের প্রতিনিধি আপনার তালিকা অনুযায়ী বাজার
              থেকে পণ্য সংগ্রহ করে আপনার বাসায় পৌঁছে দেওয়ার
              ব্যবস্থা করবে।
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              আমাদের লক্ষ্য হলো আপনার সময় বাঁচানো, বাজার করার
              ঝামেলা কমানো এবং একটি সহজ ও সুবিধাজনক
              কেনাকাটার অভিজ্ঞতা প্রদান করা।
            </p>

            {/* Services List */}
            <div className="mt-6 space-y-3">

              {services.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2
                    size={20}
                    className="shrink-0 text-green-600"
                  />

                  <span className="text-sm font-medium text-slate-700">
                    {service}
                  </span>
                </div>
              ))}

            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">

              <Link
                to="/place-order"
                className="inline-flex items-center gap-2 rounded-full bg-green-600 px-7 py-3 font-bold text-white shadow-md transition hover:bg-green-700"
              >
                Order Now
                <ArrowRight size={19} />
              </Link>

              <Link
                to="/contact"
                className="rounded-full border-2 border-blue-600 px-7 py-3 font-bold text-blue-700 transition hover:bg-blue-600 hover:text-white"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative flex items-center justify-center">

            <div className="absolute h-[80%] w-[80%] rounded-full bg-green-200/50 blur-3xl" />

            <div className="relative w-full max-w-[550px] rounded-[2rem] border border-green-100 bg-white/70 p-4 shadow-xl">

              <img
                src={DeliveryManImg}
                className="relative z-10 mx-auto max-h-[520px] w-full object-contain"
              />

              <div className="absolute bottom-5 left-5 z-20 rounded-2xl bg-green-600 px-5 py-3 text-white shadow-lg">
                <p className="text-sm font-bold">
                  BazarBondhu
                </p>
                <p className="text-xs text-green-100">
                  Your Shopping Partner
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Our Story */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-green-100 px-5 py-2 text-sm font-bold text-green-800">
            Our Story
          </span>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            আমাদের যাত্রার গল্প
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            প্রতিদিনের ব্যস্ত জীবনে বাজার করা অনেকের জন্য
            সময়সাপেক্ষ ও ঝামেলার কাজ। বিশেষ করে কর্মজীবী
            মানুষ এবং ব্যস্ত পরিবারের জন্য বাজার করা আরও
            কঠিন হয়ে পড়ে।

            <br /><br />

            এই সমস্যা সহজ করার চিন্তা থেকেই BazarBondhu-এর
            ধারণা তৈরি হয়েছে। আমাদের উদ্দেশ্য হলো মানুষকে
            ঘরে বসে নিজের প্রয়োজনীয় বাজারের তালিকা দেওয়ার
            সুযোগ করে দেওয়া এবং সেই বাজার তাদের দরজায়
            পৌঁছে দেওয়ার ব্যবস্থা করা।
          </p>

        </div>

      </section>

      {/* Mission and Vision */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-7 md:grid-cols-2">

          {/* Mission */}
          <div className="rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-8 shadow-sm transition hover:shadow-lg">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700">
              <Target size={34} />
            </div>

            <h2 className="text-2xl font-extrabold text-green-800">
              Our Mission
            </h2>

            <h3 className="mt-2 text-lg font-bold text-slate-900">
              আমাদের লক্ষ্য
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              মানুষের দৈনন্দিন বাজার করার অভিজ্ঞতাকে সহজ,
              সুবিধাজনক ও সময় সাশ্রয়ী করে তোলা। প্রতিটি
              গ্রাহকের প্রয়োজন অনুযায়ী নির্ভরযোগ্য বাজার
              সংগ্রহ ও ডেলিভারি সেবা দেওয়ার চেষ্টা করা।
            </p>

          </div>

          {/* Vision */}
          <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm transition hover:shadow-lg">

            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
              <Eye size={34} />
            </div>

            <h2 className="text-2xl font-extrabold text-blue-800">
              Our Vision
            </h2>

            <h3 className="mt-2 text-lg font-bold text-slate-900">
              আমাদের ভবিষ্যৎ লক্ষ্য
            </h3>

            <p className="mt-5 leading-8 text-slate-600">
              একটি সহজ ও নির্ভরযোগ্য অনলাইন বাজার ব্যবস্থার
              মাধ্যমে মানুষের দৈনন্দিন জীবনকে আরও
              সুবিধাজনক করা এবং গ্রাহকের আস্থা অর্জন করা।
            </p>

          </div>

        </div>

      </section>

      {/* Why Choose BazarBondhu */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">

            <span className="rounded-full bg-green-700 px-5 py-2 text-sm font-bold text-white">
              Why Choose Us
            </span>

            <h2 className="mt-5 text-3xl font-extrabold text-slate-900 sm:text-4xl">
              কেন বাজার বন্ধু বেছে নেবেন?
            </h2>

            <p className="mt-3 text-slate-600">
              আপনার সময় বাঁচাতে ও বাজারকে সহজ করতে আমরা পাশে আছি।
            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="rounded-3xl border border-green-100 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >

                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-700">
                    <Icon size={32} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="mt-2 font-semibold text-blue-700">
                    {feature.subtitle}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>

                </article>
              );
            })}

          </div>

        </div>

      </section>

      {/* Our Commitment */}
      <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-5xl rounded-3xl border border-green-100 bg-green-50/70 p-7 text-center sm:p-12">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
            <HeartHandshake size={34} />
          </div>

          <h2 className="mt-5 text-3xl font-extrabold text-green-800">
            Our Commitment
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-700">
            BazarBondhu-এর কাছে প্রতিটি গ্রাহক গুরুত্বপূর্ণ।
            আমরা প্রতিটি অর্ডার যত্নসহকারে পরিচালনা করা,
            পরিষ্কার যোগাযোগ বজায় রাখা এবং একটি ভালো
            কেনাকাটার অভিজ্ঞতা দেওয়ার প্রতিশ্রুতি নিয়ে কাজ করি।
          </p>

        </div>

      </section>

      {/* Call To Action */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-3xl bg-gradient-to-r from-green-700 to-emerald-500 px-7 py-10 text-center text-white shadow-lg md:flex-row md:px-12 md:text-left">

          <div>
            <h2 className="text-2xl font-extrabold sm:text-3xl">
              আপনার বাজার, আমাদের দায়িত্ব!
            </h2>

            <p className="mt-3 text-green-50">
              আজই BazarBondhu-এর সাথে আপনার বাজার শুরু করুন।
            </p>
          </div>

          <Link
            to="/place-order"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 font-bold text-green-800 transition hover:bg-green-50"
          >
            <Truck size={21} />
            Place Your Order
            <ArrowRight size={19} />
          </Link>

        </div>

      </section>

    </main>
  );
}

export default About;
