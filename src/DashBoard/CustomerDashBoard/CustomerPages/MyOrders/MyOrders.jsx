
import React, { useState } from "react";

import {
  Search,
  ShoppingBag,
  Clock,
  Truck,
  CheckCircle,
  Eye,
  CalendarDays,
  Package,
} from "lucide-react";

const MyOrders = () => {

  const [activeFilter, setActiveFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  // Sample order data
  const orders = [
    {
      id: "#BB1234",
      date: "Apr 25, 2025",
      items: 5,
      products: "Vegetables, Rice, Milk",
      amount: 1250,
      status: "Delivered",
    },
    {
      id: "#BB1233",
      date: "Apr 22, 2025",
      items: 3,
      products: "Fruits, Eggs, Milk",
      amount: 850,
      status: "Processing",
    },
    {
      id: "#BB1232",
      date: "Apr 20, 2025",
      items: 7,
      products: "Rice, Oil, Vegetables",
      amount: 1560,
      status: "On the Way",
    },
    {
      id: "#BB1231",
      date: "Apr 18, 2025",
      items: 4,
      products: "Snacks, Fruits",
      amount: 730,
      status: "Delivered",
    },
    {
      id: "#BB1230",
      date: "Apr 15, 2025",
      items: 6,
      products: "Dairy, Vegetables",
      amount: 980,
      status: "Cancelled",
    },
  ];

  // Order statistics
  const orderStats = [
    {
      title: "Total Orders",
      value: orders.length,
      icon: ShoppingBag,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Processing",
      value: orders.filter(
        (order) => order.status === "Processing"
      ).length,
      icon: Clock,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "On the Way",
      value: orders.filter(
        (order) => order.status === "On the Way"
      ).length,
      icon: Truck,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Delivered",
      value: orders.filter(
        (order) => order.status === "Delivered"
      ).length,
      icon: CheckCircle,
      color: "bg-green-100 text-green-600",
    },
  ];

  // Filter options
  const filters = [
    "All",
    "Processing",
    "On the Way",
    "Delivered",
    "Cancelled",
  ];

  // Filter orders by status and search
  const filteredOrders = orders.filter((order) => {

    const matchesFilter =
      activeFilter === "All" ||
      order.status === activeFilter;

    const matchesSearch =
      order.id.toLowerCase().includes(
        searchTerm.toLowerCase()
      );

    return matchesFilter && matchesSearch;
  });

  // Status badge styles
  const getStatusStyle = (status) => {

    switch (status) {

      case "Delivered":
        return "bg-green-100 text-green-700";

      case "Processing":
        return "bg-blue-100 text-blue-700";

      case "On the Way":
        return "bg-orange-100 text-orange-700";

      case "Cancelled":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-6">

      {/* Page Heading */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            My Orders
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Track and manage all your grocery orders
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays size={18} />
          <span>Order History</span>
        </div>

      </div>

      {/* Order Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {orderStats.map((stat) => {

          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="flex items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >

              <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${stat.color}`}>
                <Icon size={25} />
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  {stat.title}
                </p>

                <h2 className="mt-1 text-2xl font-bold text-slate-800">
                  {stat.value}
                </h2>
              </div>

            </div>
          );
        })}

      </div>

      {/* Orders Table Section */}
      <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm sm:p-6">

        {/* Section Heading */}
        <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">

          <div>
            <h2 className="text-lg font-bold text-slate-800">
              All Orders
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              View your recent shopping activities
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full sm:max-w-xs">

            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search order ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-full border border-gray-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />

          </div>

        </div>

        {/* Filter Buttons */}
        <div className="mb-5 flex gap-2 overflow-x-auto pb-2">

          {filters.map((filter) => (

            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                activeFilter === filter
                  ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                  : "bg-slate-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              {filter}
            </button>

          ))}

        </div>

        {/* Orders Table */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[750px] text-left text-sm">

            <thead className="bg-slate-50 text-slate-700">

              <tr>
                <th className="rounded-l-lg p-4">Order ID</th>
                <th className="p-4">Date</th>
                <th className="p-4">Items</th>
                <th className="p-4">Total Amount</th>
                <th className="p-4">Status</th>
                <th className="rounded-r-lg p-4">Action</th>
              </tr>

            </thead>

            <tbody>

              {filteredOrders.length > 0 ? (

                filteredOrders.map((order) => (

                  <tr
                    key={order.id}
                    className="border-b border-gray-100 transition hover:bg-slate-50"
                  >

                    {/* Order ID */}
                    <td className="p-4 font-semibold text-slate-800">
                      {order.id}
                    </td>

                    {/* Date */}
                    <td className="whitespace-nowrap p-4 text-gray-600">
                      {order.date}
                    </td>

                    {/* Items */}
                    <td className="p-4">

                      <div className="flex items-center gap-2">
                        <Package size={17} className="text-green-600" />

                        <div>
                          <p className="font-medium text-slate-700">
                            {order.items} Items
                          </p>

                          <p className="text-xs text-gray-400">
                            {order.products}
                          </p>
                        </div>
                      </div>

                    </td>

                    {/* Amount */}
                    <td className="whitespace-nowrap p-4 font-semibold text-slate-800">
                      ৳ {order.amount.toLocaleString("en-BD")}
                    </td>

                    {/* Status */}
                    <td className="p-4">

                      <span className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold ${getStatusStyle(order.status)}`}>
                        {order.status}
                      </span>

                    </td>

                    {/* Action */}
                    <td className="p-4">

                      <button
                        type="button"
                        onClick={() =>
                          console.log("Selected order:", order.id)
                        }
                        className="flex items-center gap-1 rounded-lg bg-blue-50 px-3 py-2 text-xs font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
                      >
                        <Eye size={15} />
                        View
                      </button>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>
                  <td colSpan="6" className="py-12 text-center">

                    <ShoppingBag
                      size={40}
                      className="mx-auto mb-3 text-gray-300"
                    />

                    <p className="font-semibold text-gray-600">
                      No orders found!
                    </p>

                    <p className="mt-1 text-sm text-gray-400">
                      Try another search or filter.
                    </p>

                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

        {/* Footer */}
        <div className="mt-5 flex flex-col justify-between gap-2 border-t border-gray-100 pt-4 text-sm text-gray-500 sm:flex-row sm:items-center">

          <p>
            Showing {filteredOrders.length} of {orders.length} orders
          </p>

          <p className="font-medium text-blue-600">
            Thank you for shopping with Bazar Bondhu!
          </p>

        </div>

      </div>

    </div>
  );
};

export default MyOrders;
