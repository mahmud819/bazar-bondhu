import { useState } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  ShoppingCart,
  Send,
  Bike,
  ShieldCheck,
  Headset,
  Smile,
} from "lucide-react";
import deleveryMan from "../assets/Logo/delevaryMan.png";
import heroLogo from "../assets/Logo/heroLogo.png";
import logoImage from "../assets/Logo/logo.png";
// import backgroundImg from '../assets/Logo/heroBackground.png'
import backgroundImg from '../assets/Images/heroBackgroun.png'
import OurServices from "./home/OurServices";
import HowItWorks from "./home/HowItWorks";
import WhyChooseUs from "./home/WhyChooseUs";
import OrderCallToAction from "./home/OrderCallToAction";
import SharedTitle from "../SharedComponents/SharedTitle/SharedTitle";

const features = [
  {
    icon: Bike,
    title: "Fast Delivery",
    subtitle: "Within 1 Hour",
    color: "text-blue-600",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Service",
    subtitle: "100% Secure",
    color: "text-emerald-600",
  },
  {
    icon: Headset,
    title: "24/7 Support",
    subtitle: "Always Here",
    color: "text-blue-700",
  },
  {
    icon: Smile,
    title: "Happiness Guaranteed",
    subtitle: "Your Satisfaction Our Priority",
    color: "text-amber-500",
  },
];

export default function Home() {
  const [address, setAddress] = useState("");
  const [items, setItems] = useState("");

  const handleOrder = (e) => {
    e.preventDefault();

    // Connect this to your Place Order page later.
    console.log({ address, items });
  };

  return (
   <div>
    {/* main home page */}
    <div>
       <main className="relative min-h-screen overflow-hidden bg-sky-100">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0  bg-cover bg-center bg-no-repeat opacity-90"
        style={{ backgroundImage: `url(${backgroundImg})`}}
      />

      {/* Light overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/65 via-sky-100/20 to-transparent" />

      {/* Main content */}
      <section className="relative z-10 mx-auto flex flex-col min-h-screen  items-center gap-2 px-4 pb-0 sm:px-8 lg:flex-row lg:px-10 ">
        {/* Left side */}
        <div className="relative z-20 flex flex-col items-start lg:w-[60%]">
          {/* Logo */}
          <img
            src={logoImage}
            alt="BazarBondhu"
            className="mb-5 w-64 object-contain sm:w-80 lg:hidden"
          />

          {/* Heading */}
          <div className="flex justify-center items-center lg:mt-4">
            <div className="w-[40%]">
              <img src={heroLogo} alt="" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold leading-tight text-green-700 sm:text-3xl lg:text-4xl">
                বাজার<span className="text-blue-700">বন্ধু</span>
              </h1>
              <h2 className="mt-1 text-2xl font-extrabold text-blue-800 sm:text-3xl">
                BazarBondhu
              </h2>

              <p className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
                আপনার বাজার, আমাদের দায়িত্ব!
              </p>
            </div>
          </div>

          {/* <div className="mt-2 h-1 w-48 rounded-full bg-green-600" /> */}

          <p className="mt-1 max-w-xl text-base font-semibold leading-relaxed text-blue-950 sm:text-lg">
            Get anything from the market and deliver to your doorstep. Fast,
            Safe & Reliable!
          </p>

          {/* Order form */}
          <form
            onSubmit={handleOrder}
            className="mt-2 flex w-full max-w-3xl flex-col gap-2 rounded-3xl border-4 border-white bg-white/95 p-0 shadow-xl backdrop-blur-md sm:flex-row sm:items-center sm:rounded-full sm:p-2"
          >
            <label className="flex min-w-0 flex-1 items-center gap-1 px-2">
              <MapPin size={28} className="shrink-0 text-blue-700" />
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter your address..."
                className="w-full min-w-0 bg-transparent py-1 text-sm text-slate-900 outline-none placeholder:text-slate-500"
                required
              />
            </label>

            <div className="hidden h-10 w-px bg-slate-300 sm:block" />

            <label className="flex min-w-0 flex-[1.5] items-center gap-1 px-2">
              <ShoppingCart size={28} className="shrink-0 text-blue-950" />
              <input
                type="text"
                value={items}
                onChange={(e) => setItems(e.target.value)}
                placeholder="What do you need? (e.g. rice, oil, vegetables...)"
                className="w-full min-w-0 bg-transparent py-1 text-sm text-slate-900 outline-none placeholder:text-slate-500"
                required
              />
            </label>

            <button
              type="submit"
              className="flex shrink-0 items-center justify-center gap-2 rounded-full bg-green-600 px-4 py-1 font-bold text-white transition hover:bg-green-700"
            >
              <Send size={22} />
              Place Order
            </button>
          </form>

          {/* Feature cards */}
          <div className="mt-3 grid w-full max-w-3xl grid-cols-2 gap-2 sm:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="flex  flex-col items-center justify-center rounded-3xl border border-white/80 bg-white/90  py-2 text-center shadow-lg backdrop-blur-sm"
                >
                  <Icon size={32} className={feature.color} strokeWidth={2.5} />

                  <h3 className="mt-1 text-sm font-extrabold leading-tight text-blue-950 sm:text-base">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-[12px] font-semibold text-blue-700">
                    {feature.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side: delivery person image */}
        <div className="w-[90%] mt-22 mx-auto relative flex   justify-center items-center lg:w-[40%] ">
          <img
            src={deleveryMan}
            alt="BazarBondhu delivery person"
            className="relative z-10 max-h-[720px] w-full max-w-[600px] object-contain object-bottom"
          />
        </div>
        {/* <div className="w-[80%]">
        <img src="../assets/Images/grocary.png" alt="" />
      </div> */}
      </section>
      

      {/* Optional link to the order page */}
      <Link to="/place-order" className="sr-only">
        Place an order
      </Link>
      
    </main>
    </div>

    {/* our services section */}
    <div>
      <OurServices></OurServices>
    </div>

    {/* how it works section */}
    <div>
      <HowItWorks></HowItWorks>
    </div>

    {/* why you chose this bazarBondhu section */}
    <div>
      <WhyChooseUs></WhyChooseUs>
    </div>
    {/* oder call to action section */}
    <div>
      <OrderCallToAction></OrderCallToAction>
    </div>
   </div>
    
  );
}
