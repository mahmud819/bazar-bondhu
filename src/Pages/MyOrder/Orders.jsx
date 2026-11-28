
import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMyOrders = async () => {
      try {
        const savedOrders = JSON.parse(
          localStorage.getItem("bazarBondhuOrders") || "[]"
        );

        if (!savedOrders.length) {
          setOrders([]);
          return;
        }

        const response = await axios.post(
          "http://localhost:5000/my-orders/lookup",
          {
            orders: savedOrders,
          }
        );

        if (response.data.success) {
          setOrders(response.data.orders);
        }

      } catch (error) {
        console.error("Failed to fetch orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMyOrders();
  }, []);

  if (loading) {
    return <p>Loading your orders...</p>;
  }

  if (orders.length === 0) {
    return (
      <div>
        <h2>My Orders</h2>
        <p>You haven't placed any orders yet.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">

      <h2 className="text-2xl font-bold mb-6">
        My Orders
      </h2>

      <div className="space-y-4">

        {orders.map((order) => (
          <div
            key={order._id}
            className="border rounded-lg p-4 shadow-sm"
          >

            <h3 className="font-bold text-lg">
             Order Id: {order.shortOrderId}
            </h3>

            <p>
              Status: {order.status}
            </p>

            <p className="text-sm text-gray-500">
              {new Date(order.createdAt).toLocaleString()}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Orders;
