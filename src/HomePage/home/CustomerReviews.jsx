import { Star } from "lucide-react";

const reviews = [
  {
    name: "রহিমুল ইসলাম",
    quote: "বাজার বন্ধু সত্যিই অসাধারণ! সময়মতো পণ্য পেয়ে খুব খুশি।",
    initials: "র",
  },
  {
    name: "নাসরিন আক্তার",
    quote: "বাজার করার ঝামেলা কমেছে। অর্ডার করাও বেশ সহজ।",
    initials: "না",
  },
  {
    name: "মো. সাইফুল ইসলাম",
    quote: "দ্রুত ডেলিভারি আর ভালো ব্যবহার—সেবাটি আমার পছন্দ হয়েছে।",
    initials: "স",
  },
];

export default function CustomerReviews() {
  return (
    <section id="reviews" className="bg-sky-50/70 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-green-100 px-4 py-1.5 text-sm font-bold text-green-800">
            Customer Reviews
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            আমাদের গ্রাহকদের মতামত
          </h2>
          <p className="mt-3 text-slate-600">গ্রাহকদের অভিজ্ঞতা আমাদের আরও ভালো হতে সাহায্য করে।</p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map(({ name, quote, initials }) => (
            <article key={name} className="rounded-3xl border border-sky-100 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-100 font-extrabold text-green-800">
                  {initials}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{name}</h3>
                  <div className="mt-1 flex gap-1 text-amber-400" aria-label="5 stars">
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star key={index} size={15} fill="currentColor" strokeWidth={1} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-5 leading-7 text-slate-600">“{quote}”</p>
            </article>
          ))}
        </div>
        <p className="mt-4 text-center text-xs text-slate-500">
          নোট: এগুলো নমুনা রিভিউ—প্রকাশের আগে প্রকৃত গ্রাহকের মতামত দিয়ে বদলে নেবেন।
        </p>
      </div>
    </section>
  );
}
