
import React, { useState } from "react";
import {
  Search,
  Eye,
  Ban,
  CheckCircle,
  Users,
  UserRound,
} from "lucide-react";

const initialUsers = [
  {
    id: 1,
    name: "Rahim Ahmed",
    email: "rahim@gmail.com",
    phone: "01712345678",
    address: "Gazipur, Bangladesh",
    role: "Customer",
    status: "Active",
    joined: "12 Nov 2026",
  },
  {
    id: 2,
    name: "Karim Hasan",
    email: "karim@gmail.com",
    phone: "01812345678",
    address: "Dhaka, Bangladesh",
    role: "Customer",
    status: "Active",
    joined: "10 Nov 2026",
  },
  {
    id: 3,
    name: "Sadia Akter",
    email: "sadia@gmail.com",
    phone: "01912345678",
    address: "Narayanganj, Bangladesh",
    role: "Customer",
    status: "Blocked",
    joined: "08 Nov 2026",
  },
  {
    id: 4,
    name: "Nusrat Jahan",
    email: "nusrat@gmail.com",
    phone: "01612345678",
    address: "Dhaka, Bangladesh",
    role: "Customer",
    status: "Active",
    joined: "05 Nov 2026",
  },
  {
    id: 5,
    name: "Hasan Mahmud",
    email: "hasan@gmail.com",
    phone: "01512345678",
    address: "Gazipur, Bangladesh",
    role: "Customer",
    status: "Active",
    joined: "02 Nov 2026",
  },
];

const ManageUsers = () => {
  const [users, setUsers] = useState(initialUsers);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedUser, setSelectedUser] = useState(null);

  const filteredUsers = users.filter((user) => {
    const searchMatch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

    const statusMatch =
      statusFilter === "All" || user.status === statusFilter;

    return searchMatch && statusMatch;
  });

  const toggleStatus = (id) => {
    setUsers((previousUsers) =>
      previousUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status: user.status === "Active" ? "Blocked" : "Active",
            }
          : user
      )
    );

    if (selectedUser?.id === id) {
      setSelectedUser((previousUser) => ({
        ...previousUser,
        status: previousUser.status === "Active" ? "Blocked" : "Active",
      }));
    }
  };

  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  const blockedUsers = users.filter(
    (user) => user.status === "Blocked"
  ).length;

  return (
    <div className="space-y-6">
      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Manage Users
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          View and manage Bazar Bondhu customer accounts.
        </p>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-blue-100 p-3">
              <Users className="text-blue-600" size={23} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Total Users</p>
              <h2 className="text-2xl font-bold text-gray-800">
                {users.length}
              </h2>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-green-100 p-3">
              <CheckCircle className="text-green-600" size={23} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Active Users</p>
              <h2 className="text-2xl font-bold text-gray-800">
                {activeUsers}
              </h2>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-100 bg-white p-5 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="rounded-lg bg-red-100 p-3">
              <Ban className="text-red-600" size={23} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Blocked Users</p>
              <h2 className="text-2xl font-bold text-gray-800">
                {blockedUsers}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Users table */}
      <div className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm">
        <div className="flex flex-col justify-between gap-4 p-5 md:flex-row md:items-center">
          <div>
            <h2 className="text-lg font-bold text-gray-800">
              All Users
            </h2>
            <p className="text-sm text-gray-500">
              Manage registered customer accounts
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search name or email"
                className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-3 text-sm outline-none focus:border-green-500 sm:w-64"
              />
            </div>

            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-green-500"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Blocked">Blocked</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-sm">
            <thead className="bg-gray-50 text-gray-600">
              <tr>
                <th className="px-5 py-4">User</th>
                <th className="px-5 py-4">Phone</th>
                <th className="px-5 py-4">Address</th>
                <th className="px-5 py-4">Joined</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-t border-gray-100 hover:bg-gray-50"
                >
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                        <UserRound
                          className="text-green-700"
                          size={20}
                        />
                      </div>

                      <div>
                        <p className="font-semibold text-gray-800">
                          {user.name}
                        </p>
                        <p className="text-xs text-gray-500">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4 text-gray-600">
                    {user.phone}
                  </td>

                  <td className="px-5 py-4 text-gray-600">
                    {user.address}
                  </td>

                  <td className="px-5 py-4 text-gray-600">
                    {user.joined}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setSelectedUser(user)}
                        title="View user"
                        className="rounded-lg bg-blue-50 p-2 text-blue-600 hover:bg-blue-100"
                      >
                        <Eye size={17} />
                      </button>

                      <button
                        onClick={() => toggleStatus(user.id)}
                        title={
                          user.status === "Active"
                            ? "Block user"
                            : "Activate user"
                        }
                        className={`rounded-lg p-2 ${
                          user.status === "Active"
                            ? "bg-red-50 text-red-600 hover:bg-red-100"
                            : "bg-green-50 text-green-600 hover:bg-green-100"
                        }`}
                      >
                        {user.status === "Active" ? (
                          <Ban size={17} />
                        ) : (
                          <CheckCircle size={17} />
                        )}
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredUsers.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-5 py-10 text-center text-gray-500"
                  >
                    No users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* User details modal */}
      {selectedUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">
                User Details
              </h2>

              <button
                onClick={() => setSelectedUser(null)}
                className="text-2xl text-gray-400 hover:text-gray-700"
              >
                &times;
              </button>
            </div>

            <div className="space-y-3 text-sm">
              <p>
                <strong>Name:</strong> {selectedUser.name}
              </p>
              <p>
                <strong>Email:</strong> {selectedUser.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedUser.phone}
              </p>
              <p>
                <strong>Address:</strong> {selectedUser.address}
              </p>
              <p>
                <strong>Joined:</strong> {selectedUser.joined}
              </p>
              <p>
                <strong>Status:</strong> {selectedUser.status}
              </p>
            </div>

            <button
              onClick={() => setSelectedUser(null)}
              className="mt-6 w-full rounded-lg bg-green-600 py-2.5 font-semibold text-white hover:bg-green-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageUsers;
