
import React from "react";

import {
  ShoppingBag,
  Wallet,
  Heart,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

const CustomerHome = () => {

  const stats = [
    {
      title: "Total Orders",
      value: "12",
      growth: "+2 this month",
      icon: ShoppingBag,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Total Spent",
      value: "৳ 8,450",
      growth: "+12%",
      icon: Wallet,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Wishlist Items",
      value: "8",
      growth: "+1 this month",
      icon: Heart,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const orders = [
    {
      id: "#BB1234",
      date: "Apr 25, 2025",
      amount: "৳ 1,250",
      status: "Delivered",
    },
    {
      id: "#BB1233",
      date: "Apr 22, 2025",
      amount: "৳ 850",
      status: "Processing",
    },
    {
      id: "#BB1232",
      date: "Apr 20, 2025",
      amount: "৳ 1,560",
      status: "On the Way",
    },
    {
      id: "#BB1231",
      date: "Apr 18, 2025",
      amount: "৳ 730",
      status: "Delivered",
    },
  ];

  const categories = [
    {
      name: "Fresh Vegetables",
      image: "/images/vegetables.png",
    },
    {
      name: "Fruits",
      image: "/images/fruits.png",
    },
    {
      name: "Dairy Products",
      image: "/images/dairy.png",
    },
    {
      name: "Snacks",
      image: "/images/snacks.png",
    },
    {
      name: "Beverages",
      image: "/images/beverages.png",
    },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";

      case "Processing":
        return "bg-blue-100 text-blue-700";

      case "On the Way":
        return "bg-orange-100 text-orange-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">

      {/* Welcome + Statistics */}
      <div className="grid grid-cols-1 gap-4 xl:grid-cols-12">

        {/* Welcome Banner */}
        <div className="relative flex min-h-44 items-center overflow-hidden rounded-2xl bg-gradient-to-r from-green-100 via-blue-50 to-blue-100 p-6 sm:p-8 xl:col-span-6">

          <div className="relative z-10">

            <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              Welcome Back, <span className="text-green-700">John Doe!</span>
            </h1>

            <p className="mt-2 text-lg font-semibold text-slate-700">
              দেখে নিন আজকের সেরা অফারগুলো
            </p>

            <div className="mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-green-500 to-blue-300" />

          </div>

          <div className="absolute -bottom-8 -right-5 text-8xl opacity-20 sm:text-9xl">
            🥕
          </div>

          <div className="absolute right-5 top-5 text-6xl sm:text-7xl">
            🛍️
          </div>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 xl:col-span-6">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.title}
                className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
              >

                <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-full ${stat.color}`}>
                  <Icon size={25} />
                </div>

                <p className="text-sm text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-800">
                  {stat.value}
                </h2>

                <p className="mt-2 text-xs font-semibold text-green-600">
                  ↑ {stat.growth}
                </p>

              </div>
            );
          })}

        </div>

      </div>

      {/* Recent Orders + Categories */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-12">

        {/* Recent Orders */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm xl:col-span-6">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="text-lg font-bold text-slate-800">
              Recent Orders
            </h2>

            <a
              href="/dashboard/user/orders"
              className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
            >
              View All <ArrowRight size={16} />
            </a>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[520px] text-left text-sm">

              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="rounded-l-lg p-3">Order ID</th>
                  <th className="p-3">Date</th>
                  <th className="p-3">Amount</th>
                  <th className="rounded-r-lg p-3">Status</th>
                </tr>
              </thead>

              <tbody>

                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-gray-100 last:border-0"
                  >

                    <td className="p-3 font-semibold text-slate-800">
                      {order.id}
                    </td>

                    <td className="p-3 whitespace-nowrap text-gray-600">
                      {order.date}
                    </td>

                    <td className="p-3 font-medium text-slate-700">
                      {order.amount}
                    </td>

                    <td className="p-3">
                      <span className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(order.status)}`}>
                        {order.status}
                      </span>
                    </td>

                  </tr>
                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Popular Categories */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm xl:col-span-6">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="text-lg font-bold text-slate-800">
              Popular Categories
            </h2>

            <a
              href="/"
              className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
            >
              View All <ArrowRight size={16} />
            </a>

          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-3 2xl:grid-cols-5">

            {categories.map((category) => (
              <div
                key={category.name}
                className="flex cursor-pointer flex-col items-center gap-2 rounded-xl p-2 transition hover:bg-green-50"
              >

                <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-green-50">

                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-full w-full object-cover"
                  />

                </div>

                <p className="text-center text-xs font-semibold text-slate-700">
                  {category.name}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* Special Offer Banner */}
      <div className="flex flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-lime-100 to-green-200 p-6 sm:flex-row">

        <div>

          <h2 className="text-2xl font-bold text-green-800">
            Special Offer!
          </h2>

          <p className="mt-1 text-slate-700">
            Get up to <span className="font-bold text-green-800">30% OFF</span>
            <br />
            on fresh vegetables
          </p>

        </div>

        <button
          onClick={() => window.location.href = "/"}
          className="flex items-center gap-2 rounded-full bg-green-600 px-6 py-3 font-semibold text-white transition hover:bg-green-700"
        >
          Shop Now <ArrowUpRight size={18} />
        </button>

      </div>

    </div>
  );
};

export default CustomerHome;
