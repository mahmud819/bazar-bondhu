
import React, { useState } from "react";

import {
  MapPin,
  Plus,
  Pencil,
  Trash2,
  Home,
  Briefcase,
  CheckCircle,
  X,
  Phone,
  UserRound,
} from "lucide-react";

const AddressBook = () => {

  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "01712345678",
      type: "Home",
      address: "House 12, Road 5",
      area: "Uttara",
      city: "Dhaka",
      postalCode: "1230",
      isDefault: true,
    },
    {
      id: 2,
      name: "John Doe",
      phone: "01712345678",
      type: "Office",
      address: "Office Building, Road 10",
      area: "Banani",
      city: "Dhaka",
      postalCode: "1213",
      isDefault: false,
    },
  ]);

  const emptyForm = {
    name: "",
    phone: "",
    type: "Home",
    address: "",
    area: "",
    city: "",
    postalCode: "",
    isDefault: false,
  };

  const [formData, setFormData] = useState(emptyForm);

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  // Add new address
  const handleAddAddress = () => {
    setFormData(emptyForm);
    setEditingId(null);
    setShowForm(true);
  };

  // Edit address
  const handleEdit = (address) => {
    setFormData({ ...address });
    setEditingId(address.id);
    setShowForm(true);
  };

  // Input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Save address
  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {

      setAddresses((prev) =>
        prev.map((address) =>
          address.id === editingId
            ? { ...formData, id: editingId }
            : address
        )
      );

    } else {

      const newAddress = {
        ...formData,
        id: Date.now(),
      };

      setAddresses((prev) => [
        ...prev,
        newAddress,
      ]);

    }

    if (formData.isDefault) {
      setAddresses((prev) =>
        prev.map((address) => ({
          ...address,
          isDefault: address.id === (editingId || Date.now()),
        }))
      );
    }

    setShowForm(false);
    setEditingId(null);
    setFormData(emptyForm);
  };

  // Delete address
  const handleDelete = (id) => {
    setAddresses((prev) =>
      prev.filter((address) => address.id !== id)
    );
  };

  // Set default address
  const handleSetDefault = (id) => {
    setAddresses((prev) =>
      prev.map((address) => ({
        ...address,
        isDefault: address.id === id,
      }))
    );
  };

  return (
    <div className="space-y-6">

      {/* Heading */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            Address Book
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage your grocery delivery addresses
          </p>
        </div>

        <button
          onClick={handleAddAddress}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
        >
          <Plus size={19} />
          Add New Address
        </button>

      </div>

      {/* Address Cards */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

        {addresses.map((address) => (

          <div
            key={address.id}
            className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
          >

            <div className="flex items-start justify-between gap-3">

              <div className="flex items-center gap-3">

                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  {address.type === "Home" ? (
                    <Home size={23} />
                  ) : (
                    <Briefcase size={23} />
                  )}
                </div>

                <div>
                  <h2 className="font-bold text-slate-800">
                    {address.type} Address
                  </h2>

                  {address.isDefault && (
                    <span className="mt-1 inline-block rounded-full bg-green-100 px-2.5 py-1 text-xs font-semibold text-green-700">
                      Default Address
                    </span>
                  )}
                </div>

              </div>

              <div className="flex gap-2">

                <button
                  onClick={() => handleEdit(address)}
                  className="rounded-lg bg-blue-50 p-2 text-blue-600 hover:bg-blue-100"
                  title="Edit address"
                >
                  <Pencil size={17} />
                </button>

                <button
                  onClick={() => handleDelete(address.id)}
                  className="rounded-lg bg-red-50 p-2 text-red-500 hover:bg-red-100"
                  title="Delete address"
                >
                  <Trash2 size={17} />
                </button>

              </div>

            </div>

            <div className="my-4 border-t border-gray-100" />

            <div className="space-y-3 text-sm text-gray-600">

              <p className="flex items-center gap-2">
                <UserRound size={17} />
                {address.name}
              </p>

              <p className="flex items-center gap-2">
                <Phone size={17} />
                {address.phone}
              </p>

              <p className="flex items-start gap-2">
                <MapPin size={17} className="mt-0.5 shrink-0" />
                <span>
                  {address.address}, {address.area},
                  {" "}{address.city} - {address.postalCode}
                </span>
              </p>

            </div>

            {!address.isDefault && (
              <button
                onClick={() => handleSetDefault(address.id)}
                className="mt-5 flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline"
              >
                <CheckCircle size={17} />
                Set as Default
              </button>
            )}

          </div>

        ))}

      </div>

      {/* Address Form Modal */}
      {showForm && (

        <div className="fixed inset-0 z-[60] flex items-center justify-center overflow-y-auto bg-black/40 p-4">

          <div className="my-auto w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl">

            <div className="mb-5 flex items-center justify-between">

              <h2 className="text-xl font-bold text-slate-800">
                {editingId ? "Edit Address" : "Add New Address"}
              </h2>

              <button
                onClick={() => setShowForm(false)}
                className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
              >
                <X size={21} />
              </button>

            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Full Name
                  </label>

                  <input
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter full name"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Phone Number
                  </label>

                  <input
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="01XXXXXXXXX"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium">
                    Address Type
                  </label>

                  <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
                  >
                    <option>Home</option>
                    <option>Office</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium">
                    Street Address
                  </label>

                  <input
                    required
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="House, road, apartment..."
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    Area
                  </label>

                  <input
                    required
                    name="area"
                    value={formData.area}
                    onChange={handleChange}
                    placeholder="Enter area"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-sm font-medium">
                    City
                  </label>

                  <input
                    required
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter city"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="mb-1 block text-sm font-medium">
                    Postal Code
                  </label>

                  <input
                    name="postalCode"
                    value={formData.postalCode}
                    onChange={handleChange}
                    placeholder="Enter postal code"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-400"
                  />
                </div>

              </div>

              <label className="flex items-center gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  name="isDefault"
                  checked={formData.isDefault}
                  onChange={handleChange}
                  className="h-4 w-4 accent-blue-600"
                />
                Set as default delivery address
              </label>

              <div className="flex flex-col-reverse gap-3 pt-3 sm:flex-row sm:justify-end">

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="rounded-xl border border-gray-200 px-5 py-3 text-sm font-semibold text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  {editingId ? "Update Address" : "Save Address"}
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default AddressBook;
