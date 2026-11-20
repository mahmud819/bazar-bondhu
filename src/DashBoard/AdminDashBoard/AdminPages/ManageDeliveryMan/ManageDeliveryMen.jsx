
import React, { useState } from "react";
import { Search, Bike, Phone, CheckCircle, Clock } from "lucide-react";

const ManageDeliverymen = () => {
  const [deliverymen, setDeliverymen] = useState([
    { id: 1, name: "Abdul Karim", phone: "01712345678", deliveries: 45, status: "Available" },
    { id: 2, name: "Rahman Ali", phone: "01812345678", deliveries: 32, status: "Busy" },
    { id: 3, name: "Hasan Mahmud", phone: "01912345678", deliveries: 28, status: "Available" },
    { id: 4, name: "Sakib Hossain", phone: "01612345678", deliveries: 15, status: "Offline" },
  ]);

  const [search, setSearch] = useState("");

  const filtered = deliverymen.filter(d =>
    d.name.toLowerCase().includes(search.toLowerCase())
  );

  const changeStatus = (id, status) => {
    setDeliverymen(prev => prev.map(d =>
      d.id === id ? { ...d, status } : d
    ));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Manage Deliverymen</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your delivery partners</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          ["Total Deliverymen", deliverymen.length],
          ["Available", deliverymen.filter(d => d.status === "Available").length],
          ["Busy", deliverymen.filter(d => d.status === "Busy").length],
        ].map(([title, value]) => (
          <div key={title} className="rounded-2xl border bg-white p-5 shadow-sm">
            <Bike className="mb-3 text-green-600" size={25} />
            <p className="text-sm text-gray-500">{title}</p>
            <h2 className="text-2xl font-bold">{value}</h2>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="relative mb-5 max-w-sm">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search deliveryman..."
            className="w-full rounded-xl border bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-4">Deliveryman</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Completed Deliveries</th>
                <th className="p-4">Availability</th>
                <th className="p-4">Update</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(d => (
                <tr key={d.id} className="border-b">
                  <td className="p-4 font-semibold">{d.name}</td>
                  <td className="p-4">
                    <span className="flex items-center gap-2">
                      <Phone size={15} /> {d.phone}
                    </span>
                  </td>
                  <td className="p-4">{d.deliveries}</td>
                  <td className="p-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      d.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : d.status === "Busy"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-gray-100 text-gray-600"
                    }`}>
                      {d.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <select value={d.status}
                      onChange={e => changeStatus(d.id, e.target.value)}
                      className="rounded-lg border p-2 text-xs">
                      <option>Available</option>
                      <option>Busy</option>
                      <option>Offline</option>
                    </select>
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

export default ManageDeliverymen;
