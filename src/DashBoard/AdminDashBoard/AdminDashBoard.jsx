// import React from 'react';
// import DashboardLayout from '../../Layout/DashBoardLayout/DashBoardLayout';
// // import DashBoard from '../../Layout/DashBoardLayout/DashBoard/DashBoard';

// const AdminDashBoard = () => {
//     return (
//         <div>
//            <DashboardLayout></DashboardLayout>
//         </div>
//     );
// };

// export default AdminDashBoard;


import React, { useState } from "react";
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  Truck,
  ChartNoAxesCombined,
  Settings,
  LogOut,
  Menu,
  X,
  Search,
  Bell,
  ChevronDown,
  UserRound,
} from "lucide-react";

import {
  NavLink,
  Outlet,
  useNavigate,
} from "react-router-dom";

// Import your logo
import LogoImage from "../../assets/Logo/logo.png";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navigate = useNavigate();

  // Sidebar menu items
  const menuItems = [
    {
      name: "Home",
      path: "/dashboard/admin/adminHome",
      icon: LayoutDashboard,
      end: true,
    },
    {
      name: "Manage Products",
      path: "/dashboard/admin/manageProducts",
      icon: Package,
    },
    {
      name: "Manage Orders",
      path: "/dashboard/admin/manageOrders",
      icon: ShoppingCart,
    },
    {
      name: "Manage Users",
      path: "/dashboard/admin/manageUsers",
      icon: Users,
    },
    {
      name: "Manage Delivery",
      path: "/dashboard/admin/manageDelivery",
      icon: Truck,
    },
    {
      name: "Reports",
      path: "/dashboard/admin/reports",
      icon: ChartNoAxesCombined,
    },
    {
      name: "Settings",
      path: "/dashboard/admin/settings",
      icon: Settings,
    },
  ];

  const handleLogout = () => {
    // Add your Firebase logout function here
    // Example: logOut();

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Mobile Overlay */}
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-64 flex-col
          border-r border-gray-200 bg-white
          transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >

        {/* Logo Section */}
        <div className="flex h-20 items-center justify-between border-b border-gray-100 px-5">
          <img
            src={LogoImage}
            alt="Bazar Bondhu"
            className="w-40 object-contain"
          />

          <button
            onClick={() => setIsSidebarOpen(false)}
            className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
          >
            <X size={22} />
          </button>
        </div>

        {/* Sidebar Menu */}
        <div className="flex-1 overflow-y-auto px-4 py-6">

          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
            Main Menu
          </p>

          <nav className="space-y-2">

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.name}
                  to={item.path}
                  end={item.end}
                  onClick={() => setIsSidebarOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                        : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                    }`
                  }
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </NavLink>
              );
            })}

          </nav>
        </div>

        {/* Sidebar Bottom */}
        <div className="border-t border-gray-100 p-4">

          <div className="mb-4 rounded-xl bg-green-50 p-4 text-center">
            <h3 className="font-semibold text-green-800">
              Bazar Bondhu
            </h3>
            <p className="mt-1 text-xs text-green-600">
              Fresh Products, Better Life
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-500 transition hover:bg-red-50"
          >
            <LogOut size={20} />
            Logout
          </button>

        </div>
      </aside>

      {/* Main Content */}
      <div className="min-h-screen lg:ml-64">

        {/* Top Navbar */}
        <header className="sticky top-0 z-30 flex h-20 items-center justify-between gap-3 border-b border-gray-200 bg-white/95 px-4 shadow-sm backdrop-blur-md sm:px-6">

          {/* Mobile Menu + Search */}
          <div className="flex min-w-0 flex-1 items-center gap-3">

            <button
              onClick={() => setIsSidebarOpen(true)}
              className="shrink-0 rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
            >
              <Menu size={24} />
            </button>

            <div className="relative w-full max-w-lg">
              <Search
                size={19}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="text"
                placeholder="Search anything..."
                className="w-full rounded-full border border-gray-200 bg-slate-50 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>

          </div>

          {/* Navbar Right */}
          <div className="flex shrink-0 items-center gap-3 sm:gap-5">

            {/* Notification */}
            <button className="relative rounded-full p-2 text-slate-600 hover:bg-gray-100">
              <Bell size={22} />

              <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] text-white">
                3
              </span>
            </button>

            {/* Admin Profile */}
            <button className="flex items-center gap-2 rounded-lg p-1 hover:bg-gray-50 sm:gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <UserRound size={23} />
              </div>

              <div className="hidden text-left sm:block">
                <h4 className="text-sm font-semibold text-slate-800">
                  Admin
                </h4>
                <p className="text-xs text-gray-500">
                  Administrator
                </p>
              </div>

              <ChevronDown
                size={17}
                className="hidden text-gray-500 sm:block"
              />

            </button>

          </div>
        </header>

        {/* Dynamic Page Content */}
        <main className="p-4 sm:p-6 lg:p-7">

          <Outlet />

        </main>

      </div>
    </div>
  );
};

export default AdminDashboard;
