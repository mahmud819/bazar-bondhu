
import React from "react";
import {
  Users,
  ShoppingBag,
  DollarSign,
  Truck,
  ArrowUpRight,
  Clock,
  CheckCircle,
  Package,
  TrendingUp,
} from "lucide-react";

const AdminHome = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,250",
      change: "+12.5%",
      icon: Users,
      color: "text-blue-600",
      bg: "bg-blue-100",
    },
    {
      title: "Total Orders",
      value: "856",
      change: "+8.2%",
      icon: ShoppingBag,
      color: "text-green-600",
      bg: "bg-green-100",
    },
    {
      title: "Total Revenue",
      value: "৳85,600",
      change: "+15.4%",
      icon: DollarSign,
      color: "text-purple-600",
      bg: "bg-purple-100",
    },
    {
      title: "Delivery Men",
      value: "45",
      change: "+5.1%",
      icon: Truck,
      color: "text-orange-600",
      bg: "bg-orange-100",
    },
  ];

  const recentOrders = [
    {
      id: "#BB1001",
      customer: "Rahim Ahmed",
      amount: "৳1,250",
      status: "Delivered",
    },
    {
      id: "#BB1002",
      customer: "Karim Hasan",
      amount: "৳850",
      status: "Pending",
    },
    {
      id: "#BB1003",
      customer: "Sadia Akter",
      amount: "৳1,500",
      status: "Processing",
    },
    {
      id: "#BB1004",
      customer: "Nusrat Jahan",
      amount: "৳650",
      status: "Delivered",
    },
  ];

  const statusStyle = {
    Delivered: "bg-green-100 text-green-700",
    Pending: "bg-yellow-100 text-yellow-700",
    Processing: "bg-blue-100 text-blue-700",
  };

  return (
    <div className="space-y-6">
      {/* Page heading */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Admin Dashboard
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Welcome back! Here is your Bazar Bondhu overview.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className={`rounded-lg p-3 ${item.bg}`}>
                  <Icon className={`h-6 w-6 ${item.color}`} />
                </div>

                <span className="flex items-center gap-1 text-sm font-medium text-green-600">
                  <TrendingUp size={15} />
                  {item.change}
                </span>
              </div>

              <h2 className="mt-4 text-sm text-gray-500">
                {item.title}
              </h2>

              <p className="mt-1 text-2xl font-bold text-gray-800">
                {item.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Order overview */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm lg:col-span-2">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-gray-800">
                Recent Orders
              </h2>
              <p className="text-sm text-gray-500">
                Latest customer orders
              </p>
            </div>

            <button className="flex items-center gap-1 text-sm font-semibold text-green-600 hover:text-green-700">
              View All <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[550px] text-left text-sm">
              <thead>
                <tr className="border-b text-gray-500">
                  <th className="px-3 py-3">Order ID</th>
                  <th className="px-3 py-3">Customer</th>
                  <th className="px-3 py-3">Amount</th>
                  <th className="px-3 py-3">Status</th>
                </tr>
              </thead>

              <tbody>
                {recentOrders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b last:border-0 hover:bg-gray-50"
                  >
                    <td className="px-3 py-4 font-semibold text-gray-700">
                      {order.id}
                    </td>

                    <td className="px-3 py-4 text-gray-600">
                      {order.customer}
                    </td>

                    <td className="px-3 py-4 font-medium text-gray-700">
                      {order.amount}
                    </td>

                    <td className="px-3 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle[order.status]}`}
                      >
                        {order.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick overview */}
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <h2 className="text-lg font-bold text-gray-800">
            Order Overview
          </h2>
          <p className="mb-5 text-sm text-gray-500">
            Current order status
          </p>

          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Clock className="text-yellow-500" size={21} />
                <span className="text-sm text-gray-600">Pending</span>
              </div>
              <span className="font-bold text-gray-800">25</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Package className="text-blue-500" size={21} />
                <span className="text-sm text-gray-600">Processing</span>
              </div>
              <span className="font-bold text-gray-800">18</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-green-500" size={21} />
                <span className="text-sm text-gray-600">Delivered</span>
              </div>
              <span className="font-bold text-gray-800">813</span>
            </div>
          </div>

          <div className="mt-6 rounded-lg bg-green-50 p-4">
            <p className="text-sm font-semibold text-green-700">
              Keep up the good work!
            </p>
            <p className="mt-1 text-xs text-green-600">
              Monitor your orders and deliveries regularly.
            </p>
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-lg font-bold text-gray-800">
          Quick Actions
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <button className="rounded-lg border border-gray-200 p-4 text-left transition hover:border-green-500 hover:bg-green-50">
            <Package className="mb-3 text-green-600" size={25} />
            <h3 className="font-semibold text-gray-800">
              Manage Products
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              Add or update products
            </p>
          </button>

          <button className="rounded-lg border border-gray-200 p-4 text-left transition hover:border-green-500 hover:bg-green-50">
            <Users className="mb-3 text-green-600" size={25} />
            <h3 className="font-semibold text-gray-800">
              Manage Users
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              View registered customers
            </p>
          </button>

          <button className="rounded-lg border border-gray-200 p-4 text-left transition hover:border-green-500 hover:bg-green-50">
            <Truck className="mb-3 text-green-600" size={25} />
            <h3 className="font-semibold text-gray-800">
              Manage Delivery
            </h3>
            <p className="mt-1 text-xs text-gray-500">
              Manage delivery personnel
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
