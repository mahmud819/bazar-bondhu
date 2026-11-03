
import { useState } from "react";
import {
  Carrot,
  Wheat,
  CookingPot,
  SprayCan,
  MapPin,
  Clock3,
  List,
  MessageSquare,
  ShoppingCart,
  Plus,
  Minus,
  CheckCircle2,
  Trash2,
} from "lucide-react";

// Product categories
const categories = [
  {
    id: "fresh",
    title: "সবজি ও ফল",
    icon: Carrot,
    products: [
      "আলু",
      "পেঁয়াজ",
      "টমেটো",
      "কাঁচা মরিচ",
      "বেগুন",
      "গাজর",
      "শসা",
      "আপেল",
      "কলা",
    ],
  },
  {
    id: "daily",
    title: "চাল-ডাল",
    icon: Wheat,
    products: [
      "মিনিকেট চাল",
      "নাজিরশাইল চাল",
      "মসুর ডাল",
      "মুগ ডাল",
      "ছোলা",
      "আটা",
      "ময়দা",
    ],
  },
  {
    id: "oil",
    title: "তেল-মসলা",
    icon: CookingPot,
    products: [
      "সয়াবিন তেল",
      "সরিষার তেল",
      "লবণ",
      "হলুদ গুঁড়া",
      "মরিচ গুঁড়া",
      "ধনিয়া গুঁড়া",
    ],
  },
  {
    id: "household",
    title: "ঘরোয়া পণ্য",
    icon: SprayCan,
    products: [
      "ডিটারজেন্ট",
      "সাবান",
      "ডিশওয়াশ",
      "টিস্যু",
      "টয়লেট ক্লিনার",
    ],
  },
];

const deliveryFee = 40;

export default function PlaceOrder() {
  const [address, setAddress] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [itemList, setItemList] = useState("");
  const [notes, setNotes] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("fresh");
  const [selectedProduct, setSelectedProduct] = useState("আলু");
  const [quantity, setQuantity] = useState(1);

  const [orderMessage, setOrderMessage] = useState("");

  // Selected category
  const activeCategory = categories.find(
    (category) => category.id === selectedCategory
  );

  // Count requested item lines
  const itemCount = itemList
    .split("\n")
    .filter((item) => item.trim() !== "").length;

  // Add selected product to list
  const handleAddItem = () => {
    if (!selectedProduct) return;

    const newItem = `${selectedProduct} × ${quantity}`;

    setItemList((previous) =>
      previous.trim()
        ? `${previous}\n${newItem}`
        : newItem
    );

    setQuantity(1);
    setOrderMessage("");
  };

  // Clear order items
  const handleClearItems = () => {
    setItemList("");
    setOrderMessage("");
  };

  // Submit order details
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!address.trim() || !itemList.trim()) {
      setOrderMessage("ঠিকানা এবং পণ্যের তালিকা পূরণ করুন।");
      return;
    }

    const orderData = {
      address,
      deliveryTime,
      items: itemList,
      notes,
      deliveryFee,
    };

    console.log("Order Details:", orderData);

    setOrderMessage(
      "আপনার অর্ডারের তথ্য প্রস্তুত হয়েছে। অর্ডার গ্রহণের জন্য Backend সংযুক্ত করতে হবে।"
    );
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 px-4 py-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Page Heading */}
        <div className="mb-9 text-center">

          <div className="mb-3 flex items-center justify-center gap-4">
            <span className="h-0.5 w-12 bg-green-600" />

            <span className="rounded-full bg-green-700 px-5 py-2 text-sm font-bold text-white">
              Place Your Order
            </span>

            <span className="h-0.5 w-12 bg-green-600" />
          </div>

          <h1 className="text-3xl font-extrabold text-blue-800 sm:text-4xl">
            আপনার প্রয়োজনীয় পণ্য অর্ডার করুন
          </h1>

          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            আপনার প্রয়োজনীয় পণ্য অর্ডার করুন সহজেই
          </p>

        </div>

        {/* Product Categories */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <button
                type="button"
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  setSelectedProduct(category.products[0]);
                }}
                className={`flex items-center justify-center gap-3 rounded-2xl border px-3 py-4 transition sm:px-5 ${
                  selectedCategory === category.id
                    ? "border-green-500 bg-green-100 text-green-800 shadow-sm"
                    : "border-green-200 bg-white text-slate-800 hover:border-green-400"
                }`}
              >
                <Icon size={28} className="shrink-0 text-green-600" />

                <span className="text-sm font-bold sm:text-base">
                  {category.title}
                </span>
              </button>
            );
          })}

        </div>

        {/* Main Order Layout */}
        <form onSubmit={handleSubmit}>

          <div className="grid items-start gap-6 lg:grid-cols-3">

            {/* Left Side - Order Form */}
            <div className="rounded-3xl border border-green-200 bg-white p-5 shadow-sm sm:p-7 lg:col-span-2">

              {/* Delivery Address */}
              <div className="mb-6">

                <label className="mb-3 flex items-center gap-2 font-bold text-slate-800">
                  <MapPin className="text-blue-600" size={21} />
                  ডেলিভারি ঠিকানা
                </label>

                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="যেমন: ১২৩, ধানমন্ডি, ঢাকা"
                  required
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>

              {/* Delivery Time */}
              <div className="mb-6">

                <label className="mb-3 flex items-center gap-2 font-bold text-slate-800">
                  <Clock3 className="text-blue-600" size={21} />
                  পছন্দের ডেলিভারি সময়
                </label>

                <select
                  value={deliveryTime}
                  onChange={(e) => setDeliveryTime(e.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="">যেকোনো সময়</option>
                  <option value="Morning">সকাল (৮টা - ১২টা)</option>
                  <option value="Afternoon">দুপুর (১২টা - ৪টা)</option>
                  <option value="Evening">বিকাল (৪টা - ৮টা)</option>
                </select>

              </div>

              {/* Product List */}
              <div className="mb-6">

                <div className="mb-3 flex items-center justify-between gap-2">
                  <label className="flex items-center gap-2 font-bold text-slate-800">
                    <List className="text-blue-600" size={21} />
                    পণ্যের তালিকা
                  </label>

                  {itemCount > 0 && (
                    <button
                      type="button"
                      onClick={handleClearItems}
                      className="flex items-center gap-1 text-xs font-semibold text-red-500 hover:text-red-700"
                    >
                      <Trash2 size={15} />
                      Clear
                    </button>
                  )}
                </div>

                <textarea
                  value={itemList}
                  onChange={(e) => {
                    setItemList(e.target.value);
                    setOrderMessage("");
                  }}
                  placeholder="আপনার প্রয়োজনীয় পণ্যের তালিকা লিখুন..."
                  rows={4}
                  required
                  className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

                {/* Add Product */}
                <div className="mt-4">

                  <label className="mb-3 block text-sm font-bold text-slate-700">
                    পণ্য যোগ করুন (ঐচ্ছিক)
                  </label>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1fr_auto_auto]">

                    <select
                      value={selectedProduct}
                      onChange={(e) => setSelectedProduct(e.target.value)}
                      className="min-w-0 rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm outline-none focus:border-blue-500"
                    >
                      {activeCategory.products.map((product) => (
                        <option key={product} value={product}>
                          {product}
                        </option>
                      ))}
                    </select>

                    {/* Quantity */}
                    <div className="flex items-center justify-center gap-4 rounded-xl border border-slate-300 px-3">

                      <button
                        type="button"
                        onClick={() =>
                          setQuantity((q) => Math.max(1, q - 1))
                        }
                        className="text-blue-700"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={17} />
                      </button>

                      <span className="min-w-5 text-center font-bold">
                        {quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() =>
                          setQuantity((q) => Math.min(99, q + 1))
                        }
                        className="text-blue-700"
                        aria-label="Increase quantity"
                      >
                        <Plus size={17} />
                      </button>

                    </div>

                    <button
                      type="button"
                      onClick={handleAddItem}
                      className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                    >
                      <Plus size={18} />
                      যোগ করুন
                    </button>

                  </div>
                </div>

              </div>

              {/* Additional Notes */}
              <div>

                <label className="mb-3 flex items-center gap-2 font-bold text-slate-800">
                  <MessageSquare className="text-blue-600" size={21} />
                  অতিরিক্ত নোট (ঐচ্ছিক)
                </label>

                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="বিশেষ কোনো নির্দেশনা থাকলে লিখুন..."
                  rows={2}
                  className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                />

              </div>

            </div>

            {/* Right Side - Order Summary */}
            <aside className="rounded-3xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-5 shadow-sm sm:p-6">

              <h2 className="mb-6 flex items-center gap-3 text-xl font-extrabold text-slate-900">
                <ShoppingCart className="text-green-700" size={26} />
                অর্ডার সামারি
              </h2>

              {/* Items Count */}
              <div className="flex items-center justify-between border-b border-green-100 py-4 text-sm">
                <span className="text-slate-700">মোট পণ্যের তালিকা:</span>
                <span className="font-bold text-slate-900">
                  {itemCount} টি
                </span>
              </div>

              {/* Subtotal */}
              <div className="flex items-center justify-between border-b border-green-100 py-4 text-sm">
                <span className="text-slate-700">পণ্যের মূল্য:</span>
                <span className="font-semibold text-slate-900">
                  বাজার শেষে
                </span>
              </div>

              {/* Delivery Fee */}
              <div className="flex items-center justify-between border-b border-green-100 py-4 text-sm">
                <span className="text-slate-700">ডেলিভারি চার্জ:</span>
                <span className="font-bold text-slate-900">
                  ৳ {deliveryFee}
                </span>
              </div>

              {/* Total */}
              <div className="mt-5 flex items-center justify-between rounded-xl bg-blue-100 px-4 py-4">
                <span className="font-bold text-blue-950">
                  প্রাথমিক চার্জ:
                </span>

                <span className="text-2xl font-extrabold text-blue-800">
                  ৳ {deliveryFee}
                </span>
              </div>

              <p className="mt-3 text-xs leading-5 text-slate-500">
                পণ্যের মূল্য বাজার থেকে কেনাকাটার পর নির্ধারিত হবে।
                ডেলিভারি চার্জটি নমুনা হিসেবে ৳৪০ রাখা হয়েছে।
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-green-600 px-5 py-4 font-bold text-white shadow-md transition hover:bg-green-700 active:scale-[0.98]"
              >
                <CheckCircle2 size={21} />
                অর্ডার নিশ্চিত করুন
              </button>

              {/* Submit Feedback */}
              {orderMessage && (
                <p
                  role="status"
                  className="mt-4 rounded-xl bg-blue-50 p-3 text-center text-sm font-medium text-blue-800"
                >
                  {orderMessage}
                </p>
              )}

            </aside>

          </div>

        </form>

      </div>

    </main>
  );
}
