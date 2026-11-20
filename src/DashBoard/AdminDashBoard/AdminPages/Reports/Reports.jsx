
import React from "react";
import {
  BarChart, Bar, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from "recharts";

import { TrendingUp, ShoppingBag, Wallet } from "lucide-react";

const Reports = () => {
  const salesData = [
    { month: "Jan", sales: 12000 },
    { month: "Feb", sales: 18000 },
    { month: "Mar", sales: 15000 },
    { month: "Apr", sales: 22000 },
    { month: "May", sales: 28000 },
    { month: "Jun", sales: 25000 },
  ];

  const orderData = [
    { name: "Delivered", value: 65 },
    { name: "Processing", value: 20 },
    { name: "Cancelled", value: 15 },
  ];

  const COLORS = ["#16A34A", "#2563EB", "#EF4444"];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Reports & Analytics</h1>
        <p className="mt-1 text-sm text-gray-500">Monitor your business performance</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { title: "Total Sales", value: "৳120,000", icon: Wallet },
          { title: "Total Orders", value: "450", icon: ShoppingBag },
          { title: "Growth", value: "+18.5%", icon: TrendingUp },
        ].map(item => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="rounded-2xl border bg-white p-5 shadow-sm">
              <Icon size={25} className="mb-3 text-green-600" />
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="mt-1 text-2xl font-bold">{item.value}</h2>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="mb-5 font-bold text-slate-800">Monthly Sales</h2>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#16A34A" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-5 shadow-sm">
          <h2 className="mb-5 font-bold text-slate-800">Order Statistics</h2>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={orderData} dataKey="value" nameKey="name"
                  cx="50%" cy="50%" outerRadius={90} label>
                  {orderData.map((entry, index) => (
                    <Cell key={entry.name} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
