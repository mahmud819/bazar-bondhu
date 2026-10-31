import { ClipboardList, Store, Bike, ArrowRight } from "lucide-react";
import SharedTitle from "../../SharedComponents/SharedTitle/SharedTitle";
import AddMore from "../../assets/Logo/AddMore.png";
import OrderPhone from "../../assets/Logo/OrderPhone.png";
import Stall from "../../assets/Logo/Stall.png";
import { FaGreaterThan } from "react-icons/fa";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="bg-sky-50/70 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <SharedTitle title={"How It Works"}></SharedTitle>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl"><span className="text-green-700">মাত্র ৩টি</span>
             ধাপে অর্ডার করুন
          </h2>
          <p className="mt-3 text-slate-600">
            সহজ অর্ডার, নির্ভরযোগ্য কেনাকাটা, সুবিধাজনক ডেলিভারি।
          </p>
        </div>

        <div className="flex items-center">
          {/* div of fisrt step of ordering */}
            <div className=" flex  lg:w-[30%] ">
              <div className="w-[60%] my-auto">
                <h1 className="text-xl fond-extrabold"><span className="bg-green-700 rounded-full px-2 text-white mr-2">1</span>অর্ডার দিন</h1>
                <p className="text-sm pt-1 text-slate-600">আপনার পছন্দের পণ্য ও ডেলিভারি ঠিকানা জানান।</p>
              </div>
              <div className="w-[40%]">
                <img className="w-full" src={OrderPhone} alt="phone photo" />
              </div>
            </div>

            {/* div of first arrow */}
            <div className="w-[5%] lg:text-2xl"><FaGreaterThan className="text-green-700 fond-extrabold" /></div>

            {/* div of second step of ordering */}
            <div className=" flex  lg:w-[30%] ">
              <div className="w-[60%] my-auto">
                <h1 className="text-l fond-extrabold"><span className="bg-green-700 rounded-full px-2 text-white mr-2">2</span>বাজার থেকে কেনা</h1>
                <p className="text-sm pt-1 text-slate-600">আমাদের প্রতিনিধি বাজার থেকে পণ্য সংগ্রহ করবেন।</p>
              </div>
              <div className="w-[40%] flex items-center">
                <img className="w-full" src={Stall} alt="phone photo" />
              </div>
            </div>

            {/* div of second arrow */}
            <div className="w-[5%] lg:text-2xl"><FaGreaterThan className="text-green-700 fond-extrabold" /></div>

            {/* div of thrid step of ordering */}
             <div className=" flex  lg:w-[30%] ">
              <div className="w-[60%] my-auto">
                <h1 className="text-xl fond-extrabold"><span className="bg-green-700 rounded-full px-2 text-white mr-2">3</span>ডেলিভারি পান</h1>
                <p className="text-sm pt-1 text-slate-600">আপনার ঠিকানায় পণ্য পৌঁছে দেওয়া হবে।</p>
              </div>
              <div className="w-[40%]">
                <img className="w-full" src={OrderPhone} alt="phone photo" />
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
