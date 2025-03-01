import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch, FaFilter } from "react-icons/fa";

const orders = [
  {
    id: "#10234",
    customer: "John Doe",
    date: "01 Mar 2025",
    amount: "$150",
    status: "Pending",
  },
  {
    id: "#10235",
    customer: "Alice Smith",
    date: "02 Mar 2025",
    amount: "$200",
    status: "Completed",
  },
  {
    id: "#10236",
    customer: "Mark Lee",
    date: "03 Mar 2025",
    amount: "$300",
    status: "Canceled",
  },
];

export default function Dashboard() {
  const [filter, setFilter] = useState("");
  const [allorders, setAllorders] = useState([]);

  const filteredOrders = allorders.filter((order) =>
    order.paymentstatus.toLowerCase().includes(filter.toLowerCase())
  );

  const fetchOrderdata = () => {
    axios
      .get("http://localhost:5000/api/v1/order/allorder")
      .then((response) => {
        setAllorders(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchOrderdata();
  }, []);
  console.log(allorders);

  return (
    <div className="p-6 w-full space-y-6">
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Total Orders", count: allorders.length, color: "bg-blue-500" },
         
          {
            label: "Paid Orders",
            count: allorders.filter((o) => o.paymentstatus === "paid").length,
            color: "bg-green-500",
          },
          {
            label: "Unpaid Orders",
            count: orders.filter((o) => o.paymentstatus === "unpaid").length,
            color: "bg-red-500",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className={`${stat.color} text-white p-4 rounded-2xl text-center`}
          >
            <h2 className="text-xl font-semibold">{stat.label}</h2>
            <p className="text-2xl">{stat.count}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div className="relative w-1/3">
          <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
          <input
            type="text"
            placeholder="Search orders..."
            className="pl-10 p-2 w-full border rounded-lg"
          />
        </div>
        <button
          className="flex items-center border px-4 py-2 rounded-lg"
          onClick={() => setFilter(filter === "unpaid" ? "" : "unpaid")}
        >
          <FaFilter className="mr-2" /> unpaid Orders
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Order ID</th>
              <th className="border p-2">Customer</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Amount</th>
              <th className="border p-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {allorders.map((order) => (
              <tr key={order.id} className="text-center">
                <td className="border p-2">{order._id}</td>
                <td className="border p-2">{order.name}</td>
                <td className="border p-2">{order.updatedAt.split("T")[0]}</td>
                <td className="border p-2">{order.totalprice}</td>
                <td className="border p-2">
                  <span
                    className={`px-3 py-1 rounded-full text-white ${
                      order.paymentstatus === "paid"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {order.paymentstatus}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
