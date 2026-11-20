
import React from "react";

import {
  PackageCheck,
  Wallet,
  Star,
  Clock,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const DeliverymanHome = () => {

  // Dashboard statistics
  const stats = [
    {
      title: "Today's Deliveries",
      value: "8",
      growth: "+2",
      icon: PackageCheck,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Today's Earnings",
      value: "৳ 1,240",
      growth: "+12%",
      icon: Wallet,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Rating",
      value: "4.8",
      growth: "+0.1",
      icon: Star,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  // Assigned deliveries
  const deliveries = [
    {
      id: "#BB1234",
      time: "10:30 AM",
      status: "Pending",
    },
    {
      id: "#BB1233",
      time: "11:15 AM",
      status: "On the Way",
    },
    {
      id: "#BB1232",
      time: "12:00 PM",
      status: "Pending",
    },
    {
      id: "#BB1231",
      time: "01:30 PM",
      status: "Delivered",
    },
  ];

  // Earnings chart data
  const earnings = [
    { day: "Mon", amount: 700 },
    { day: "Tue", amount: 950 },
    { day: "Wed", amount: 950 },
    { day: "Thu", amount: 950 },
    { day: "Fri", amount: 1250 },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return "bg-orange-100 text-orange-700";

      case "On the Way":
        return "bg-blue-100 text-blue-700";

      case "Delivered":
        return "bg-green-100 text-green-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">

      {/* Dashboard Heading */}
      <div>

        <h1 className="text-2xl font-bold text-slate-800">
          Deliveryman Dashboard
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Your delivery overview
        </p>

      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

        {stats.map((stat) => {

          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:shadow-md"
            >

              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${stat.color}`}>
                <Icon size={25} />
              </div>

              <div>

                <p className="text-sm text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-800">
                  {stat.value}
                </h2>

                <p className="mt-1 text-xs font-semibold text-green-600">
                  ↑ {stat.growth}
                </p>

              </div>

            </div>
          );

        })}

      </div>

      {/* Deliveries + Earnings Chart */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        {/* Assigned Deliveries */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="text-lg font-bold text-slate-800">
              Assigned Deliveries
            </h2>

            <a
              href="/dashboard/deliveryman/deliveries"
              className="flex items-center gap-1 text-sm font-semibold text-blue-600 hover:underline"
            >
              View All <ArrowRight size={16} />
            </a>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full min-w-[400px] text-left text-sm">

              <thead className="bg-slate-50 text-slate-700">
                <tr>
                  <th className="rounded-l-lg p-3">Order ID</th>
                  <th className="p-3">Time</th>
                  <th className="rounded-r-lg p-3">Status</th>
                </tr>
              </thead>

              <tbody>

                {deliveries.map((delivery) => (

                  <tr
                    key={delivery.id}
                    className="border-b border-gray-100 last:border-0"
                  >

                    <td className="p-3 font-semibold text-slate-800">
                      {delivery.id}
                    </td>

                    <td className="whitespace-nowrap p-3 text-gray-600">
                      {delivery.time}
                    </td>

                    <td className="p-3">

                      <span className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${getStatusStyle(delivery.status)}`}>
                        {delivery.status}
                      </span>

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

        {/* Today's Earnings Chart */}
        <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

          <div className="mb-5 flex items-center justify-between">

            <h2 className="text-lg font-bold text-slate-800">
              Today's Earning Chart
            </h2>

            <Wallet size={20} className="text-blue-600" />

          </div>

          {/* CSS Bar Chart */}
          <div className="flex h-64 items-end justify-around gap-3 border-b border-l border-gray-200 px-3 pb-2 pt-5">

            {earnings.map((item) => (

              <div
                key={item.day}
                className="flex h-full flex-1 flex-col items-center justify-end gap-2"
              >

                <span className="text-[10px] font-medium text-gray-500">
                  {item.amount}
                </span>

                <div
                  className={`w-full max-w-10 rounded-t-md transition-all hover:opacity-75 ${
                    item.day === "Fri"
                      ? "bg-gradient-to-t from-green-500 to-green-300"
                      : "bg-gradient-to-t from-blue-600 to-sky-400"
                  }`}
                  style={{
                    height: `${(item.amount / 1500) * 100}%`,
                  }}
                />

                <span className="text-xs text-gray-600">
                  {item.day}
                </span>

              </div>

            ))}

          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Weekly earnings overview (৳)
          </p>

        </div>

      </div>

      {/* Bottom Banner */}
      <div className="relative flex flex-col items-center justify-between gap-4 overflow-hidden rounded-2xl bg-gradient-to-r from-green-100 to-emerald-200 p-6 sm:flex-row">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-500 text-white shadow-sm">
            <CheckCircle2 size={32} />
          </div>

          <div>

            <h2 className="text-xl font-bold text-green-900">
              Keep Going!
            </h2>

            <p className="mt-1 text-sm text-green-800">
              You are doing great today!
            </p>

          </div>

        </div>

        <div className="flex items-center gap-2 text-green-800">
          <TruckIcon />
          <span className="text-sm font-semibold">
            Delivering Happiness
          </span>
        </div>

      </div>

    </div>
  );
};

// Small reusable icon component
const TruckIcon = () => (
  <MapPin size={25} />
);

export default DeliverymanHome;
