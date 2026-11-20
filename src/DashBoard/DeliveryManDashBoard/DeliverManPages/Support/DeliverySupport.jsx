
import React from "react";
import { CircleHelp, Mail, Phone } from "lucide-react";

const DeliverySupport = () => {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">

      <h1 className="text-2xl font-bold text-slate-800">
        Delivery Support
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        Need help with your deliveries? Contact our support team.
      </p>

      <div className="mt-6 space-y-4">

        <div className="flex items-center gap-3 rounded-xl bg-blue-50 p-4">
          <Phone className="text-blue-600" />
          <div>
            <h3 className="font-semibold">Call Support</h3>
            <p className="text-sm text-gray-500">Contact customer support</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl bg-green-50 p-4">
          <Mail className="text-green-600" />
          <div>
            <h3 className="font-semibold">Email Support</h3>
            <p className="text-sm text-gray-500">Send us your questions</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default DeliverySupport;
