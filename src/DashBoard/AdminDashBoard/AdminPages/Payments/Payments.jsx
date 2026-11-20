
import React, { useState } from "react";
import { Wallet, Search, CreditCard, Banknote } from "lucide-react";

const Payments = () => {
  const [payments] = useState([
    { id: "TXN1001", order: "BB1001", customer: "Rahim Ahmed", method: "bKash", amount: 1250, status: "Paid" },
    { id: "TXN1002", order: "BB1002", customer: "Karim Hossain", method: "Cash on Delivery", amount: 850, status: "Pending" },
    { id: "TXN1003", order: "BB1003", customer: "Sumi Akter", method: "Nagad", amount: 1560, status: "Paid" },
    { id: "TXN1004", order: "BB1004", customer: "Nusrat Jahan", method: "Card", amount: 730, status: "Refunded" },
  ]);

  const [search, setSearch] = useState("");

  const filtered = payments.filter(p =>
    `${p.id} ${p.customer} ${p.order}`.toLowerCase().includes(search.toLowerCase())
  );

  const total = payments
    .filter(p => p.status === "Paid")
    .reduce((sum, p) => sum + p.amount, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Payments</h1>
        <p className="mt-1 text-sm text-gray-500">Monitor marketplace transactions</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { title: "Total Transactions", value: payments.length, icon: CreditCard },
          { title: "Successful Payments", value: payments.filter(p => p.status === "Paid").length, icon: Wallet },
          { title: "Collected Amount", value: `৳${total.toLocaleString("en-BD")}`, icon: Banknote },
        ].map(item => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-2xl border bg-white p-5 shadow-sm">
              <Icon className="mb-3 text-green-600" size={25} />
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="mt-1 text-2xl font-bold">{item.value}</h2>
            </div>
          );
        })}
      </div>

      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="relative mb-5 max-w-sm">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search transactions..."
            className="w-full rounded-xl border bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-4">Transaction ID</th>
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Method</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(p => (
                <tr key={p.id} className="border-b">
                  <td className="p-4 font-semibold">{p.id}</td>
                  <td className="p-4">{p.order}</td>
                  <td className="p-4">{p.customer}</td>
                  <td className="p-4">{p.method}</td>
                  <td className="p-4 font-semibold">৳{p.amount}</td>
                  <td className="p-4">
                    <span className={`rounded-full px-3 py-1 text-xs ${
                      p.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : p.status === "Pending"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-purple-100 text-purple-700"
                    }`}>{p.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Payments;
