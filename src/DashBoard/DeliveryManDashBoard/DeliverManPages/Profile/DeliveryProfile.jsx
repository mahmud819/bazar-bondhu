
import React from "react";
import { UserRound, Mail, Phone, MapPin } from "lucide-react";

const DeliveryProfile = () => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">

      <h1 className="mb-6 text-2xl font-bold text-slate-800">
        My Profile
      </h1>

      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-blue-600">
          <UserRound size={32} />
        </div>

        <div>
          <h2 className="text-lg font-bold">Delivery Partner</h2>
          <p className="text-sm text-gray-500">Deliveryman</p>
        </div>
      </div>

      <div className="space-y-4 text-sm text-gray-600">
        <p><UserRound className="mr-2 inline" size={18} /> Full Name: Delivery Partner</p>
        <p><Mail className="mr-2 inline" size={18} /> Email: delivery@example.com</p>
        <p><Phone className="mr-2 inline" size={18} /> Phone: +880 1XXXXXXXXX</p>
        <p><MapPin className="mr-2 inline" size={18} /> Address: Dhaka, Bangladesh</p>
      </div>

    </div>
  );
};

export default DeliveryProfile;
