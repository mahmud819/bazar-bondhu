
import React, { useState } from "react";
import {
  Search,
  Eye,
  Truck,
  Package,
  ShoppingBag,
} from "lucide-react";

const ManageOrders = () => {
  const [orders, setOrders] = useState([
    {
      id: "BB1001",
      customer: "Rahim Ahmed",
      date: "Nov 18, 2026",
      items: 5,
      amount: 1250,
      status: "Pending",
      deliveryman: "Not Assigned",
    },
    {
      id: "BB1002",
      customer: "Karim Hossain",
      date: "Nov 18, 2026",
      items: 3,
      amount: 850,
      status: "Processing",
      deliveryman: "Abdul Karim",
    },
    {
      id: "BB1003",
      customer: "Sumi Akter",
      date: "Nov 19, 2026",
      items: 7,
      amount: 1560,
      status: "On the Way",
      deliveryman: "Rahman Ali",
    },
    {
      id: "BB1004",
      customer: "Nusrat Jahan",
      date: "Nov 19, 2026",
      items: 4,
      amount: 730,
      status: "Delivered",
      deliveryman: "Abdul Karim",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || order.status === filter;

    return matchesSearch && matchesFilter;
  });

  const updateStatus = (id, status) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === id ? { ...order, status } : order
      )
    );
  };

  const statusStyle = {
    Pending: "bg-orange-100 text-orange-700",
    Processing: "bg-blue-100 text-blue-700",
    "On the Way": "bg-purple-100 text-purple-700",
    Delivered: "bg-green-100 text-green-700",
    Cancelled: "bg-red-100 text-red-700",
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          Manage Orders
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage and monitor all customer orders
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { title: "Total Orders", value: orders.length, icon: ShoppingBag },
          { title: "Pending Orders", value: orders.filter(o => o.status === "Pending").length, icon: Package },
          { title: "Delivered", value: orders.filter(o => o.status === "Delivered").length, icon: Truck },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex items-center gap-4 rounded-2xl border bg-white p-5 shadow-sm">
              <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                <Icon size={25} />
              </div>
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <h2 className="text-2xl font-bold text-slate-800">{item.value}</h2>
              </div>
            </div>
          );
        })}
      </div>

      <div className="rounded-2xl border bg-white p-4 shadow-sm sm:p-6">
        <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-lg font-bold text-slate-800">
            All Orders
          </h2>

          <div className="relative w-full sm:max-w-xs">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search order or customer..."
              className="w-full rounded-xl border bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-400"
            />
          </div>
        </div>

        <div className="mb-5 flex gap-2 overflow-x-auto pb-2">
          {["All", "Pending", "Processing", "On the Way", "Delivered", "Cancelled"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ${
                filter === status
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-gray-600 hover:bg-blue-50"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="bg-slate-50 text-slate-700">
              <tr>
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Date</th>
                <th className="p-4">Amount</th>
                <th className="p-4">Status</th>
                <th className="p-4">Deliveryman</th>
                <th className="p-4">Update Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100">
                  <td className="p-4 font-semibold">{order.id}</td>
                  <td className="p-4">{order.customer}</td>
                  <td className="whitespace-nowrap p-4">{order.date}</td>
                  <td className="p-4 font-semibold">৳{order.amount}</td>
                  <td className="p-4">
                    <span className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[order.status]}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4">{order.deliveryman}</td>
                  <td className="p-4">
                    <select
                      value={order.status}
                      onChange={(e) => updateStatus(order.id, e.target.value)}
                      className="rounded-lg border px-2 py-2 text-xs outline-none"
                    >
                      {["Pending", "Processing", "On the Way", "Delivered", "Cancelled"].map(s => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredOrders.length === 0 && (
            <p className="py-10 text-center text-gray-500">
              No orders found.
            </p>
          )}
        </div>

        <p className="mt-4 text-sm text-gray-500">
          Showing {filteredOrders.length} of {orders.length} orders
        </p>
      </div>
    </div>
  );
};

export default ManageOrders;
