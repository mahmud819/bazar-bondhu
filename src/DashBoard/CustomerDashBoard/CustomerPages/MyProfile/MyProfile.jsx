
import React, { useState } from "react";

import {
  UserRound,
  Mail,
  Phone,
  MapPin,
  Camera,
  Save,
  Pencil,
} from "lucide-react";

const MyProfile = () => {

  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john@gmail.com",
    phone: "+880 1712345678",
    gender: "Male",
    address: "Uttara, Dhaka, Bangladesh",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect your profile update API here
    console.log("Updated Profile:", profile);

    setIsEditing(false);
  };

  return (
    <div className="space-y-6">

      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">
          My Profile
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage your personal information and account details
        </p>
      </div>

      {/* Profile Card */}
      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">

        {/* Profile Banner */}
        <div className="h-32 bg-gradient-to-r from-blue-600 via-blue-400 to-green-400" />

        <div className="px-5 pb-6 sm:px-8">

          {/* Profile Image */}
          <div className="-mt-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">

            <div className="relative">

              <div className="flex h-24 w-24 items-center justify-center rounded-full border-4 border-white bg-blue-100 text-blue-600 shadow-sm">
                <UserRound size={45} />
              </div>

              <button
                type="button"
                className="absolute bottom-1 right-0 rounded-full bg-blue-600 p-2 text-white shadow-sm hover:bg-blue-700"
                title="Change profile image"
              >
                <Camera size={15} />
              </button>

            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-50 px-5 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-100"
            >
              <Pencil size={17} />
              {isEditing ? "Cancel Editing" : "Edit Profile"}
            </button>

          </div>

          {/* Customer Information */}
          <div className="mt-6">

            <h2 className="text-xl font-bold text-slate-800">
              {profile.name}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Bazar Bondhu Customer
            </p>

          </div>

          <div className="my-6 border-t border-gray-100" />

          {/* Profile Form */}
          <form onSubmit={handleSubmit}>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              {/* Full Name */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>

                <div className="relative">

                  <UserRound
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="text"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full rounded-xl border border-gray-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-400 disabled:cursor-not-allowed disabled:text-gray-500"
                  />

                </div>
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Email Address
                </label>

                <div className="relative">

                  <Mail
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="email"
                    name="email"
                    value={profile.email}
                    disabled
                    className="w-full rounded-xl border border-gray-200 bg-slate-100 py-3 pl-10 pr-4 text-sm text-gray-500"
                  />

                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Phone Number
                </label>

                <div className="relative">

                  <Phone
                    size={18}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={profile.phone}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full rounded-xl border border-gray-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-400 disabled:cursor-not-allowed disabled:text-gray-500"
                  />

                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Gender
                </label>

                <select
                  name="gender"
                  value={profile.gender}
                  onChange={handleChange}
                  disabled={!isEditing}
                  className="w-full rounded-xl border border-gray-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-blue-400 disabled:cursor-not-allowed disabled:text-gray-500"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>

              </div>

              {/* Address */}
              <div className="md:col-span-2">

                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Address
                </label>

                <div className="relative">

                  <MapPin
                    size={18}
                    className="absolute left-3 top-3 text-gray-400"
                  />

                  <textarea
                    name="address"
                    rows="3"
                    value={profile.address}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className="w-full resize-none rounded-xl border border-gray-200 bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-400 disabled:cursor-not-allowed disabled:text-gray-500"
                  />

                </div>

              </div>

            </div>

            {/* Save Button */}
            {isEditing && (
              <div className="mt-6 flex justify-end">

                <button
                  type="submit"
                  className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  <Save size={18} />
                  Save Changes
                </button>

              </div>
            )}

          </form>

        </div>

      </div>

    </div>
  );
};

export default MyProfile;
