
import React, { useState } from "react";
import { Settings, Bell, Globe, Save } from "lucide-react";

const AdminSettings = () => {
  const [settings, setSettings] = useState({
    storeName: "Bazar Bondhu",
    email: "support@bazarbondhu.com",
    phone: "01712345678",
    notifications: true,
    maintenance: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings:", settings);
    // Connect settings API here
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Admin Settings</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your marketplace settings</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="mb-5 flex items-center gap-2 text-lg font-bold">
            <Globe className="text-blue-600" /> General Settings
          </h2>

          <div className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-semibold">Store Name</label>
              <input name="storeName" value={settings.storeName} onChange={handleChange}
                className="w-full rounded-xl border p-3 text-sm outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">Support Email</label>
              <input type="email" name="email" value={settings.email} onChange={handleChange}
                className="w-full rounded-xl border p-3 text-sm outline-none focus:border-blue-400" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold">Support Phone</label>
              <input name="phone" value={settings.phone} onChange={handleChange}
                className="w-full rounded-xl border p-3 text-sm outline-none focus:border-blue-400" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="mb-5 flex items-center gap-2 text-lg font-bold">
            <Bell className="text-blue-600" /> Preferences
          </h2>

          <div className="space-y-5">
            <label className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium">Enable Notifications</span>
              <input type="checkbox" name="notifications"
                checked={settings.notifications} onChange={handleChange}
                className="h-5 w-5 accent-blue-600" />
            </label>

            <label className="flex items-center justify-between gap-3">
              <span className="text-sm font-medium">Maintenance Mode</span>
              <input type="checkbox" name="maintenance"
                checked={settings.maintenance} onChange={handleChange}
                className="h-5 w-5 accent-blue-600" />
            </label>
          </div>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
          <Save size={18} /> Save Settings
        </button>
      </form>
    </div>
  );
};

export default AdminSettings;
