
import React from "react";
import { MapPin, Clock } from "lucide-react";

const MyDeliveries = () => {

  const deliveries = [
    {
      id: "#BB1234",
      customer: "Rahim Ahmed",
      address: "Uttara, Dhaka",
      time: "10:30 AM",
      status: "Pending",
    },
    {
      id: "#BB1233",
      customer: "Karim Hossain",
      address: "Mirpur, Dhaka",
      time: "11:15 AM",
      status: "On the Way",
    },
    {
      id: "#BB1232",
      customer: "Nurul Islam",
      address: "Dhanmondi, Dhaka",
      time: "12:00 PM",
      status: "Pending",
    },
    {
      id: "#BB1231",
      customer: "Sumi Akter",
      address: "Mohammadpur, Dhaka",
      time: "01:30 PM",
      status: "Delivered",
    },
  ];

  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          My Deliveries
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your assigned delivery orders
        </p>
      </div>

      <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">

        <div className="overflow-x-auto">

          <table className="w-full min-w-[650px] text-left text-sm">

            <thead className="bg-slate-50">
              <tr>
                <th className="p-4">Order ID</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Address</th>
                <th className="p-4">Time</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {deliveries.map((delivery) => (

                <tr key={delivery.id} className="border-b border-gray-100">

                  <td className="p-4 font-semibold">
                    {delivery.id}
                  </td>

                  <td className="p-4">
                    {delivery.customer}
                  </td>

                  <td className="p-4">
                    <span className="flex items-center gap-1 text-gray-600">
                      <MapPin size={15} />
                      {delivery.address}
                    </span>
                  </td>

                  <td className="p-4">
                    <span className="flex items-center gap-1 text-gray-600">
                      <Clock size={15} />
                      {delivery.time}
                    </span>
                  </td>

                  <td className="p-4">
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      delivery.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : delivery.status === "Pending"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-blue-100 text-blue-700"
                    }`}>
                      {delivery.status}
                    </span>
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

export default MyDeliveries;
