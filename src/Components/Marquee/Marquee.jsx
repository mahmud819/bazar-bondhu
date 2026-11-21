
import React from "react";

const Marquee = () => {
  const messages = [
    "Create an account to view your offers, manage your wishlist, and enjoy a better shopping experience!",
    "আপনার অফার দেখতে, পছন্দের পণ্য উইশলিস্টে রাখতে এবং আরও ভালো অভিজ্ঞতা পেতে একটি অ্যাকাউন্ট তৈরি করুন।",
  ];

  return (
    <div className="overflow-hidden bg-slate-100/50  py-3 text-8xl fixed font-bold z-100">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...messages, ...messages].map((message, index) => (
          <span
            key={index}
            className="px-10 text-sm font-medium md:text-base"
          >
            {message}
            <span className="mx-6 text-yellow-300">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
