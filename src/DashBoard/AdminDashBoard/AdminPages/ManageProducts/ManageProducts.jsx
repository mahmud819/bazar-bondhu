
import React, { useState } from "react";
import {
  Plus, Search, Pencil, Trash2, Package, X
} from "lucide-react";

const ManageProducts = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Fresh Tomatoes", category: "Vegetables", price: 60, stock: 50 },
    { id: 2, name: "Fresh Apples", category: "Fruits", price: 180, stock: 25 },
    { id: 3, name: "Miniket Rice", category: "Groceries", price: 75, stock: 100 },
    { id: 4, name: "Fresh Milk", category: "Dairy", price: 90, stock: 0 },
  ]);

  const emptyForm = {
    name: "", category: "Vegetables", price: "", stock: ""
  };

  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  const openAdd = () => {
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(true);
  };

  const openEdit = (product) => {
    setForm({
      name: product.name,
      category: product.category,
      price: product.price,
      stock: product.stock,
    });
    setEditingId(product.id);
    setShowForm(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const productData = {
      ...form,
      price: Number(form.price),
      stock: Number(form.stock),
    };

    if (editingId) {
      setProducts((prev) =>
        prev.map((p) =>
          p.id === editingId ? { ...productData, id: editingId } : p
        )
      );
    } else {
      setProducts((prev) => [
        ...prev,
        { ...productData, id: Date.now() },
      ]);
    }

    setShowForm(false);
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Manage Products</h1>
          <p className="mt-1 text-sm text-gray-500">
            Manage your grocery marketplace products
          </p>
        </div>

        <button onClick={openAdd}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700">
          <Plus size={18} /> Add Product
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          ["Total Products", products.length],
          ["In Stock", products.filter(p => p.stock > 0).length],
          ["Out of Stock", products.filter(p => p.stock === 0).length],
        ].map(([title, value]) => (
          <div key={title} className="rounded-2xl border bg-white p-5 shadow-sm">
            <Package className="mb-3 text-blue-600" size={25} />
            <p className="text-sm text-gray-500">{title}</p>
            <h2 className="mt-1 text-2xl font-bold">{value}</h2>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border bg-white p-5 shadow-sm">
        <div className="relative mb-5 max-w-sm">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-xl border bg-slate-50 py-3 pl-10 pr-4 text-sm outline-none focus:border-blue-400" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-sm">
            <thead className="bg-slate-50">
              <tr>
                <th className="p-4">Product</th>
                <th className="p-4">Category</th>
                <th className="p-4">Price</th>
                <th className="p-4">Stock</th>
                <th className="p-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map(product => (
                <tr key={product.id} className="border-b">
                  <td className="p-4 font-semibold">{product.name}</td>
                  <td className="p-4">{product.category}</td>
                  <td className="p-4">৳{product.price}</td>
                  <td className="p-4">
                    <span className={`rounded-full px-3 py-1 text-xs ${product.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {product.stock > 0 ? `${product.stock} Available` : "Out of Stock"}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <button onClick={() => openEdit(product)} className="rounded-lg bg-blue-50 p-2 text-blue-600">
                        <Pencil size={17} />
                      </button>
                      <button onClick={() => deleteProduct(product.id)} className="rounded-lg bg-red-50 p-2 text-red-600">
                        <Trash2 size={17} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/40 p-4">
          <form onSubmit={handleSubmit} className="my-auto w-full max-w-lg space-y-4 rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">{editingId ? "Edit Product" : "Add Product"}</h2>
              <button type="button" onClick={() => setShowForm(false)}><X /></button>
            </div>

            <input required placeholder="Product name" value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              className="w-full rounded-xl border p-3 text-sm" />

            <select value={form.category}
              onChange={e => setForm({ ...form, category: e.target.value })}
              className="w-full rounded-xl border p-3 text-sm">
              {["Vegetables", "Fruits", "Groceries", "Dairy", "Personal Care", "Household"].map(c => (
                <option key={c}>{c}</option>
              ))}
            </select>

            <input required min="0" type="number" placeholder="Price"
              value={form.price}
              onChange={e => setForm({ ...form, price: e.target.value })}
              className="w-full rounded-xl border p-3 text-sm" />

            <input required min="0" type="number" placeholder="Stock quantity"
              value={form.stock}
              onChange={e => setForm({ ...form, stock: e.target.value })}
              className="w-full rounded-xl border p-3 text-sm" />

            <button className="w-full rounded-xl bg-blue-600 p-3 font-semibold text-white hover:bg-blue-700">
              {editingId ? "Update Product" : "Save Product"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
