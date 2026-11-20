
import React, { useState } from "react";

import {
  Heart,
  ShoppingCart,
  Trash2,
  ArrowRight,
  Package,
} from "lucide-react";

import { Link } from "react-router-dom";

const MyWishlist = () => {

  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: "Fresh Tomatoes",
      category: "Fresh Vegetables",
      price: 60,
      oldPrice: 75,
      image: "/images/tomato.png",
      stock: true,
    },
    {
      id: 2,
      name: "Fresh Potatoes",
      category: "Fresh Vegetables",
      price: 50,
      oldPrice: 60,
      image: "/images/potato.png",
      stock: true,
    },
    {
      id: 3,
      name: "Fresh Apples",
      category: "Fruits",
      price: 180,
      oldPrice: 200,
      image: "/images/apple.png",
      stock: true,
    },
    {
      id: 4,
      name: "Fresh Carrots",
      category: "Fresh Vegetables",
      price: 80,
      oldPrice: 100,
      image: "/images/carrot.png",
      stock: false,
    },
  ]);

  const removeWishlist = (id) => {
    setWishlist((prev) =>
      prev.filter((product) => product.id !== id)
    );
  };

  const handleAddToCart = (product) => {
    if (!product.stock) return;

    // Connect your Add to Cart API here
    console.log("Added to cart:", product);
  };

  return (
    <div className="space-y-6">

      {/* Heading */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

        <div>
          <h1 className="text-2xl font-bold text-slate-800">
            My Wishlist
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Your favorite products are waiting for you
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-pink-50 px-4 py-3 text-pink-600">
          <Heart size={20} />
          <span className="text-sm font-semibold">
            {wishlist.length} Saved Products
          </span>
        </div>

      </div>

      {/* Wishlist Products */}
      {wishlist.length > 0 ? (

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">

          {wishlist.map((product) => (

            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >

              {/* Product Image */}
              <div className="relative flex h-48 items-center justify-center bg-slate-50 p-5">

                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />

                <button
                  onClick={() => removeWishlist(product.id)}
                  className="absolute right-4 top-4 rounded-full bg-white p-2 text-red-500 shadow-sm transition hover:bg-red-50"
                  title="Remove from wishlist"
                >
                  <Trash2 size={18} />
                </button>

                {!product.stock && (
                  <span className="absolute bottom-3 left-3 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-600">
                    Out of Stock
                  </span>
                )}

              </div>

              {/* Product Details */}
              <div className="p-5">

                <p className="text-xs font-medium text-green-600">
                  {product.category}
                </p>

                <h2 className="mt-1 text-lg font-bold text-slate-800">
                  {product.name}
                </h2>

                <div className="mt-3 flex items-center gap-2">

                  <span className="text-xl font-bold text-green-700">
                    ৳{product.price}
                  </span>

                  <span className="text-sm text-gray-400 line-through">
                    ৳{product.oldPrice}
                  </span>

                </div>

                <button
                  disabled={!product.stock}
                  onClick={() => handleAddToCart(product)}
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
                >
                  <ShoppingCart size={18} />
                  {product.stock ? "Add to Cart" : "Unavailable"}
                </button>

              </div>

            </div>

          ))}

        </div>

      ) : (

        <div className="rounded-2xl border border-gray-100 bg-white px-5 py-16 text-center shadow-sm">

          <Heart size={50} className="mx-auto text-gray-300" />

          <h2 className="mt-4 text-xl font-bold text-slate-800">
            Your Wishlist is Empty!
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Save your favorite products to find them easily later.
          </p>

          <Link
            to="/"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Explore Products <ArrowRight size={18} />
          </Link>

        </div>

      )}

    </div>
  );
};

export default MyWishlist;
