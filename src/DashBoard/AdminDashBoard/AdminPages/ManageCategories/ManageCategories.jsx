
import React, { useState } from "react";
import { Plus, Pencil, Trash2, X, Tags } from "lucide-react";

const ManageCategories = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Fresh Groceries", products: 25 },
    { id: 2, name: "Daily Essentials", products: 18 },
    { id: 3, name: "Household Items", products: 15 },
    { id: 4, name: "Personal Care", products: 12 },
    { id: 5, name: "Fruits & Vegetables", products: 30 },
  ]);

  const [name, setName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const saveCategory = (e) => {
    e.preventDefault();

    if (editingId) {
      setCategories(prev => prev.map(c =>
        c.id === editingId ? { ...c, name } : c
      ));
    } else {
      setCategories(prev => [
        ...prev,
        { id: Date.now(), name, products: 0 },
      ]);
    }

    setName("");
    setEditingId(null);
    setShowForm(false);
  };

  const editCategory = (category) => {
    setName(category.name);
    setEditingId(category.id);
    setShowForm(true);
  };

  const deleteCategory = (id) => {
    setCategories(prev => prev.filter(c => c.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Manage Categories</h1>
          <p className="mt-1 text-sm text-gray-500">Organize your grocery products</p>
        </div>
        <button onClick={() => { setName(""); setEditingId(null); setShowForm(true); }}
          className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-white">
          <Plus size={18} /> Add Category
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map(category => (
          <div key={category.id} className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between">
              <div className="rounded-xl bg-green-50 p-3 text-green-600">
                <Tags size={25} />
              </div>
              <div className="flex gap-2">
                <button onClick={() => editCategory(category)} className="rounded-lg bg-blue-50 p-2 text-blue-600">
                  <Pencil size={17} />
                </button>
                <button onClick={() => deleteCategory(category.id)} className="rounded-lg bg-red-50 p-2 text-red-600">
                  <Trash2 size={17} />
                </button>
              </div>
            </div>
            <h2 className="mt-5 font-bold text-slate-800">{category.name}</h2>
            <p className="mt-1 text-sm text-gray-500">{category.products} Products</p>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
          <form onSubmit={saveCategory} className="w-full max-w-md space-y-4 rounded-2xl bg-white p-6">
            <div className="flex justify-between">
              <h2 className="text-xl font-bold">{editingId ? "Edit Category" : "New Category"}</h2>
              <button type="button" onClick={() => setShowForm(false)}><X /></button>
            </div>
            <input required value={name} onChange={e => setName(e.target.value)}
              placeholder="Category name" className="w-full rounded-xl border p-3" />
            <button className="w-full rounded-xl bg-blue-600 p-3 font-semibold text-white">
              Save Category
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ManageCategories;
