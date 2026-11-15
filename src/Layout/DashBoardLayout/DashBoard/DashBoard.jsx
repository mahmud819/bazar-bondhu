
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  LayoutDashboard,
  ShoppingBag,
  Heart,
  UserRound,
  MapPin,
  Headset,
  LogOut,
  Search,
  Bell,
  Menu,
  ShoppingBasket,
  Wallet,
  Package,
  ArrowUpRight,
  ArrowRight,
  Carrot,
  Apple,
  Milk,
  Coffee,
  GlassWater,
  X,
} from "lucide-react";

// Sidebar menu
const menuItems = [
  { name: "Dashboard", path: "/customer/dashboard", icon: LayoutDashboard },
  { name: "My Orders", path: "/customer/orders", icon: ShoppingBag },
  { name: "My Wishlist", path: "/customer/wishlist", icon: Heart },
  { name: "My Profile", path: "/customer/profile", icon: UserRound },
  { name: "Address Book", path: "/customer/addresses", icon: MapPin },
  { name: "Support", path: "/contact", icon: Headset },
];

// Dashboard statistics
const statistics = [
  {
    title: "Total Orders",
    value: "12",
    change: "+2 this month",
    icon: ShoppingBasket,
    color: "bg-green-100 text-green-700",
    chart: "M0 35 C20 15, 35 40, 55 25 S85 30, 110 10 S145 25, 170 5",
    line: "#16a34a",
  },
  {
    title: "Total Spent",
    value: "৳ 8,450",
    change: "+12% this month",
    icon: Wallet,
    color: "bg-blue-100 text-blue-700",
    chart: "M0 35 C20 30, 25 10, 45 25 S75 5, 95 25 S135 10, 170 5",
    line: "#2563eb",
  },
  {
    title: "Wishlist Items",
    value: "8",
    change: "+1 this month",
    icon: Heart,
    color: "bg-orange-100 text-orange-600",
    chart: "M0 35 C20 20, 30 30, 45 15 S75 30, 95 15 S130 25, 170 5",
    line: "#f59e0b",
  },
];

// Recent orders
const recentOrders = [
  {
    id: "#BB1234",
    date: "Apr 25, 2026",
    amount: "৳ 1,250",
    status: "Delivered",
  },
  {
    id: "#BB1233",
    date: "Apr 22, 2026",
    amount: "৳ 850",
    status: "Processing",
  },
  {
    id: "#BB1232",
    date: "Apr 20, 2026",
    amount: "৳ 1,560",
    status: "On the Way",
  },
  {
    id: "#BB1231",
    date: "Apr 18, 2026",
    amount: "৳ 730",
    status: "Delivered",
  },
];

// Popular categories
const categories = [
  { name: "Fresh Vegetables", icon: Carrot, emoji: "🥕", color: "bg-green-100" },
  { name: "Fruits", icon: Apple, emoji: "🍎", color: "bg-red-100" },
  { name: "Dairy Products", icon: Milk, emoji: "🥛", color: "bg-blue-100" },
  { name: "Snacks", icon: Coffee, emoji: "🍪", color: "bg-orange-100" },
  { name: "Beverages", icon: GlassWater, emoji: "🥤", color: "bg-purple-100" },
];

// Reusable statistic card
function StatCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm transition hover:shadow-md">

      <div className="flex items-center gap-3">

        <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${item.color}`}>
          <Icon size={25} />
        </div>

        <div className="min-w-0">
          <p className="text-sm text-slate-500">{item.title}</p>

          <h3 className="mt-1 text-xl font-extrabold text-blue-950">
            {item.value}
          </h3>

          <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-green-600">
            <ArrowUpRight size={14} />
            {item.change}
          </p>
        </div>

      </div>

      {/* Mini chart */}
      <div className="mt-4">
        <svg viewBox="0 0 170 45" className="h-10 w-full" preserveAspectRatio="none">
          <path
            d={item.chart}
            fill="none"
            stroke={item.line}
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

    </div>
  );
}

// Sidebar
function DashboardSidebar({ mobileOpen, setMobileOpen }) {
  return (
    <>
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-950/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r border-blue-100 bg-white p-5 shadow-sm transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      >

        {/* Logo */}
        <div className="mb-9 flex items-center justify-between">
          <Link to="/">
            <img
              src="/images/bazarbondhu-logo.png"
              alt="BazarBondhu"
              className="h-14 w-auto object-contain"
            />
          </Link>

          <button
            onClick={() => setMobileOpen(false)}
            className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
            aria-label="Close sidebar"
          >
            <X size={22} />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-2">

          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/customer/dashboard"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-600 hover:bg-blue-50 hover:text-blue-700"
                  }`
                }
              >
                <Icon size={20} />
                {item.name}
              </NavLink>
            );
          })}

        </nav>

        {/* Sidebar Promo */}
        <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-blue-100 p-4 text-center">

          <div className="text-4xl">🛒</div>

          <h3 className="mt-2 font-bold text-green-800">
            Fresh Products
          </h3>

          <p className="text-sm font-semibold text-blue-800">
            Better Life
          </p>

          <div className="mt-3 h-1.5 rounded-full bg-gradient-to-r from-green-500 to-blue-600" />

        </div>

        {/* Logout */}
        <button
          onClick={() => {
            console.log("Logout clicked");
          }}
          className="mt-5 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
        >
          <LogOut size={20} />
          Logout
        </button>

      </aside>
    </>
  );
}
const DashBoard = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-[#eef6ff]">

      <DashboardSidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* Main Content */}
      <main className="min-h-screen lg:ml-64">

        {/* Top Navbar */}
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between gap-3 border-b border-blue-100 bg-white/95 px-4 shadow-sm backdrop-blur-md sm:px-6">

          <div className="flex min-w-0 flex-1 items-center gap-4">

            <button
              onClick={() => setMobileOpen(true)}
              className="rounded-lg p-2 text-slate-700 hover:bg-blue-50 lg:hidden"
              aria-label="Open sidebar"
            >
              <Menu size={24} />
            </button>

            {/* Search */}
            <div className="flex w-full max-w-xl items-center gap-3 rounded-full border border-blue-100 bg-slate-50 px-4 py-3">

              <Search size={19} className="shrink-0 text-slate-500" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for products..."
                className="w-full min-w-0 bg-transparent text-sm outline-none placeholder:text-slate-500"
              />

            </div>

          </div>

          {/* Right Side */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-5">

            <button
              className="relative rounded-full p-2 text-slate-600 transition hover:bg-blue-50 hover:text-blue-700"
              aria-label="Notifications"
            >
              <Bell size={22} />

              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
                2
              </span>
            </button>

            {/* Customer Profile */}
            <Link
              to="/customer/profile"
              className="flex items-center gap-2 sm:gap-3"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                <UserRound size={23} />
              </div>

              <div className="hidden sm:block">
                <h3 className="text-sm font-bold text-slate-900">
                  John Doe
                </h3>

                <p className="text-xs text-slate-500">
                  Customer
                </p>
              </div>

            </Link>

          </div>

        </header>

        {/* Dashboard Body */}
        <div className="space-y-5 p-4 sm:p-6 lg:p-7">

          {/* Welcome Banner */}
          <section className="relative flex min-h-[170px] items-center overflow-hidden rounded-2xl bg-gradient-to-r from-blue-50 via-sky-100 to-green-100 p-6">

            <div className="relative z-10 max-w-lg">

              <h1 className="text-2xl font-extrabold leading-tight text-blue-950 sm:text-3xl">
                Welcome Back,{" "}
                <span className="text-green-700">
                  John Doe!
                </span>
              </h1>

              <p className="mt-3 text-lg font-bold text-slate-800">
                দেখে নিন আজকের সেরা অফারগুলো
              </p>

              <div className="mt-4 h-1 w-28 rounded-full bg-gradient-to-r from-green-600 to-blue-500" />

            </div>

            <img
              src="/images/dashboard-grocery.png"
              alt="Fresh groceries"
              className="absolute bottom-0 right-3 hidden h-[165px] w-[230px] object-contain sm:block"
            />

          </section>

          {/* Statistics */}
          <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

            {statistics.map((item) => (
              <StatCard key={item.title} item={item} />
            ))}

          </section>

          {/* Recent Orders and Categories */}
          <section className="grid items-start gap-5 xl:grid-cols-[1.15fr_1fr]">

            {/* Recent Orders */}
            <div className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm sm:p-5">

              <div className="mb-5 flex items-center justify-between">

                <h2 className="text-lg font-extrabold text-blue-950">
                  Recent Orders
                </h2>

                <Link
                  to="/customer/orders"
                  className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-green-600"
                >
                  View All <ArrowRight size={16} />
                </Link>

              </div>

              <div className="overflow-x-auto">

                <table className="w-full min-w-[580px] text-left text-sm">

                  <thead>
                    <tr className="bg-blue-50 text-slate-700">
                      <th className="rounded-l-xl px-4 py-3">Order ID</th>
                      <th className="px-4 py-3">Date</th>
                      <th className="px-4 py-3">Total Amount</th>
                      <th className="px-4 py-3">Status</th>
                      <th className="rounded-r-xl px-4 py-3">Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    {recentOrders.map((order) => (
                      <tr
                        key={order.id}
                        className="border-b border-slate-100 last:border-none"
                      >

                        <td className="px-4 py-4 font-bold text-blue-900">
                          {order.id}
                        </td>

                        <td className="px-4 py-4 text-slate-600">
                          {order.date}
                        </td>

                        <td className="px-4 py-4 font-semibold text-slate-800">
                          {order.amount}
                        </td>

                        <td className="px-4 py-4">
                          <span
                            className={`whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-bold ${
                              order.status === "Delivered"
                                ? "bg-green-100 text-green-700"
                                : order.status === "Processing"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-orange-100 text-orange-700"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>

                        <td className="px-4 py-4">
                          <Link
                            to="/track-order"
                            className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700 transition hover:bg-blue-600 hover:text-white"
                          >
                            View
                          </Link>
                        </td>

                      </tr>
                    ))}
                  </tbody>

                </table>

              </div>

            </div>

            {/* Popular Categories */}
            <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">

              <div className="mb-5 flex items-center justify-between">

                <h2 className="text-lg font-extrabold text-blue-950">
                  Popular Categories
                </h2>

                <Link
                  to="/place-order"
                  className="flex items-center gap-1 text-sm font-bold text-blue-600 hover:text-green-600"
                >
                  View All <ArrowRight size={16} />
                </Link>

              </div>

              <div className="grid grid-cols-3 gap-4 sm:grid-cols-5">

                {categories.map((category) => {
                  const Icon = category.icon;

                  return (
                    <Link
                      key={category.name}
                      to="/place-order"
                      className="group flex flex-col items-center text-center"
                    >

                      <div className={`flex h-16 w-16 items-center justify-center rounded-full ${category.color} transition duration-300 group-hover:scale-110`}>
                        <span className="text-3xl">{category.emoji}</span>
                      </div>

                      <p className="mt-2 text-xs font-bold leading-5 text-slate-700">
                        {category.name}
                      </p>

                    </Link>
                  );
                })}

              </div>

            </div>

          </section>

          {/* Special Offer Banner */}
          <section className="relative flex min-h-[125px] items-center justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-lime-100 via-green-100 to-emerald-100 p-5 sm:px-8">

            <div className="relative z-10">

              <h2 className="text-xl font-extrabold text-green-800 sm:text-2xl">
                Special Offer!
              </h2>

              <p className="mt-2 text-sm font-medium text-slate-700">
                Get up to{" "}
                <span className="font-extrabold text-green-700">
                  30% OFF
                </span>
              </p>

              <p className="text-sm text-slate-600">
                on fresh vegetables
              </p>

            </div>

            <div className="hidden text-6xl sm:block">
              🥬 🥕 🍅
            </div>

            <Link
              to="/place-order"
              className="relative z-10 flex shrink-0 items-center gap-2 rounded-full bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-md transition hover:bg-green-700"
            >
              Shop Now
              <ArrowRight size={17} />
            </Link>

          </section>

        </div>

      </main>

    </div>
  );
}


export default DashBoard;