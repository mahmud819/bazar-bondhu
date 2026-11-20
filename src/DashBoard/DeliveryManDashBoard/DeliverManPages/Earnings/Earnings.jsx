
import React from "react";
import { Wallet, TrendingUp, CalendarDays } from "lucide-react";

const Earnings = () => {

  const earningStats = [
    { title: "Today's Earnings", amount: "৳ 1,240" },
    { title: "This Week", amount: "৳ 7,850" },
    { title: "This Month", amount: "৳ 28,500" },
  ];

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          My Earnings
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Track your delivery income
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

        {earningStats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
          >
            <Wallet className="mb-3 text-green-600" size={28} />

            <p className="text-sm text-gray-500">
              {item.title}
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-800">
              {item.amount}
            </h2>
          </div>
        ))}

      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-lg font-bold text-slate-800">
          Earnings History
        </h2>

        <p className="text-sm text-gray-500">
          <TrendingUp className="mr-2 inline text-green-600" size={18} />
          Your earnings history will appear here.
        </p>
      </div>

    </div>
  );
};

export default Earnings;
