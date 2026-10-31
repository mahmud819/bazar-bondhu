
import React from "react";

const reviews = [
  {
    id: 1,
    name: "রহিমুল ইসলাম",
    review: "বাজার বন্ধু সত্যিই অসাধারণ! অল্প সময়ে পণ্য পেয়ে খুব খুশি।",
    image: "/images/rahim.png",
  },
  {
    id: 2,
    name: "নাসরিন আক্তার",
    review: "সার্ভিস দারুণ, ব্যবহার করতে অনেক সহজ।",
    image: "/images/nasrin.png",
  },
  {
    id: 3,
    name: "মোঃ সাইফুল ইসলাম",
    review: "দ্রুত ডেলিভারি আর ভালো সার্ভিসের জন্য ধন্যবাদ।",
    image: "/images/saiful.png",
  },
];

const Reviews = () => {
  return (
    <section className="w-full px-4 py-8 md:px-6">
      <div className="mx-auto max-w-7xl rounded-3xl bg-gradient-to-b from-sky-50 to-blue-100 px-5 py-8 md:px-10">

        {/* Section Heading */}
        <div className="mb-8 text-center">
          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-[2px] w-16 bg-green-600"></span>

            <span className="rounded-full bg-green-600 px-5 py-2 text-lg font-bold text-white shadow-md">
              Our Customers Say
            </span>

            <span className="h-[2px] w-16 bg-green-600"></span>
          </div>

          <h2 className="text-2xl font-extrabold text-blue-950 md:text-3xl">
            আমাদের গ্রাহকদের মতামত
          </h2>
        </div>

        {/* Customer Review Cards */}
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-3 md:gap-8">

          {reviews.map((review, index) => (
            <div
              key={review.id}
              className={`flex items-center gap-4 rounded-3xl border border-white bg-white/95 p-4 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl ${
                index === 1 ? "md:translate-y-4" : ""
              }`}
            >
              {/* Customer Image */}
              <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border-[3px] border-blue-500 p-1 md:h-24 md:w-24">
                <img
                  src={review.image}
                  alt={review.name}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              {/* Review Content */}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium leading-relaxed text-gray-800 md:text-base">
                  “{review.review}”
                </p>

                {/* Star Rating */}
                <div className="my-1 flex gap-0.5 text-xl text-yellow-400">
                  {"★★★★★"}
                </div>

                {/* Customer Name */}
                <h3 className="text-sm font-bold text-blue-950 md:text-base">
                  {review.name}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Reviews;
