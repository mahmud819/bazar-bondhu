import {
  ShoppingBasket,
  Wheat,
  SprayCan,
  HeartPulse,
  MoreHorizontal,
} from "lucide-react";
import SharedTitle from "../../SharedComponents/SharedTitle/SharedTitle";
import PersonelCareIcon from "../../assets/Logo/personelCare.png";
import DailyEssential from "../../assets/Logo/DailyEssential.png";
import HouseHold from "../../assets/Logo/HouseHold.png";
import FreshVegetable from "../../assets/Logo/FreshVegetable.png";
import AddMore from "../../assets/Logo/AddMore.png";
const services = [
  {
    title: "Fresh Groceries",
    description: "তাজা শাকসবজি ও ফলমূল",
    // icon: ShoppingBasket,
    image: FreshVegetable,
    tint: "bg-green-100 text-green-700",
  },
  {
    title: "Daily Essentials",
    description: "চাল, ডাল, তেল ও নিত্যপ্রয়োজনীয় পণ্য",
    // icon: Wheat,
    image: DailyEssential,
    tint: "bg-amber-100 text-amber-700",
  },
  {
    title: "Household Items",
    description: "ঘর পরিষ্কারের প্রয়োজনীয় সামগ্রী",
    // icon: SprayCan,
    image: HouseHold,
    tint: "bg-sky-100 text-sky-700",
  },
  {
    title: "Personal Care",
    description: "ব্যক্তিগত যত্নের পণ্য",
    image: PersonelCareIcon,
    tint: "bg-pink-100 text-pink-700",
  },
  {
    title: "And More",
    description: "আরও অনেক পণ্য এক জায়গায়",
    // icon: MoreHorizontal,
    image: AddMore,
    tint: "bg-violet-100 text-violet-700",
  },
];

export default function OurServices() {
  return (
    <section id="services" className="px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <SharedTitle title={"Our Services"}></SharedTitle>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            আমাদের <span className="text-green-800">সেবা সমূহ</span>
          </h2>
          <p className="mt-3 text-slate-600">
            আপনার দৈনন্দিন বাজার এখন আরও সহজ—সবকিছু এক জায়গায়।
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {services.map(({ title, description, image, tint }) => (
            <article
              key={title}
              className="rounded-3xl border border-green-300 bg-white p-2 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div
                className={`mx-auto flex items-center justify-center rounded-2xl ${tint}`}
              >
                <img
                  src={image}
                  alt={title}
                  className=" object-contain"
                />
              </div>
              <h3 className="mt-5 text-lg font-bold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
