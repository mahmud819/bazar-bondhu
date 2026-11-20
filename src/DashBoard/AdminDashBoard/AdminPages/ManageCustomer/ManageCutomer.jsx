
import React, { useState } from "react";
import { Search, Users, UserRound, Ban, CheckCircle } from "lucide-react";

const ManageCustomers = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: "Rahim Ahmed", email: "rahim@gmail.com", phone: "01712345678", orders: 12, status: "Active" },
    { id: 2, name: "Karim Hossain", email: "karim@gmail.com", phone: "01812345678", orders: 8, status: "Active" },
    { id: 3, name: "Sumi Akter", email: "sumi@gmail.com", phone: "01912345678", orders: 5, status: "Blocked" },
    { id: 4, name: "Nusrat Jahan", email: "nusrat@gmail.com", phone: "01612345678", orders: 15, status: "Active" },
  ]);

  const [search, setSearch] = useState("");

  const toggleStatus = (id) => {
    setCustomers(prev => prev.map(customer =>
      customer.id === id
        ? { ...customer, status: customer.status === "Active" ? "Blocked" : "Active" }
        : customer
    ));
  };

  const filtered = customers.filter(c =>
    `${c.name} ${c.email}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Manage Customers</h1>
        <p className="mt-1 text-sm text-gray-500">Manage registered customer accounts</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <Users className="mb-3 text-blue-600" size={25} />
          <p className="text-sm text-gray-500">Total Customers</p>
          <h2 className="text-2xl font-bold">{customers.length}</h2>
        </div>
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <CheckCircle className="mb-3 text-green-600" size={25} />
          <p className="text-sm text-gray-500">Active Customers</p>
          <h2 className="text-2xl font-bold">
            {customers.filter(c => c.status === "Active").length}
          </h2>
        </div>
      </div>

      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="relative mb-5 max-w-sm">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search customer..."
            className="w-full rounded-xl border bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[750px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-4">Customer</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Orders</th>
                <th className="p-4">Status</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(c => (
                <tr key={c.id} className="border-b">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-blue-50 p-2 text-blue-600">
                        <UserRound size={20} />
                      </div>
                      <div>
                        <p className="font-semibold">{c.name}</p>
                        <p className="text-xs text-gray-500">{c.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">{c.phone}</td>
                  <td className="p-4">{c.orders}</td>
                  <td className="p-4">
                    <span className={`rounded-full px-3 py-1 text-xs ${c.status === "Active" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button onClick={() => toggleStatus(c.id)}
                      className={`flex items-center gap-1 rounded-lg px-3 py-2 text-xs font-semibold ${c.status === "Active" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}>
                      <Ban size={15} />
                      {c.status === "Active" ? "Block" : "Unblock"}
                    </button>
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

export default ManageCustomers;
