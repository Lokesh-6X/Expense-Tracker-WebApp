import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../../features/auth/authService";

const Dashboard = () => {

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [transactionType, setTransactionType] = useState("expense");

  const [formData, setFormData] = useState({
    date: "",
    note: "",
    category: "",
    amount: ""
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getCurrentUser();
        if (data && data.user) {
          setUser(data.user);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
      }
    };
    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const openModal = (type) => {
    setTransactionType(type);
    setShowModal(true);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const transaction = {
      ...formData,
      type: transactionType
    };

    console.log(transaction);

    setShowModal(false);

    setFormData({
      date: "",
      note: "",
      category: "",
      amount: ""
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold text-white">
          {user ? `Welcome, ${user.first_name}!` : "Expense Tracker"}
        </h1>

        <button
          onClick={handleLogout}
          className="bg-white text-red-500 px-4 py-2 rounded-lg font-medium hover:bg-red-500 hover:text-white transition"
        >
          Logout
        </button>

      </div>

      {/* ACTION BUTTONS */}
      <div className="flex gap-4 mb-6">

        <button
          onClick={() => openModal("income")}
          className="bg-green-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-green-600 hover:scale-105 transition"
        >
          + Add Income
        </button>

        <button
          onClick={() => openModal("expense")}
          className="bg-red-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-red-600 hover:scale-105 transition"
        >
          + Add Expense
        </button>

      </div>

      {/* TRANSACTION PLACEHOLDER */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6">

        <h2 className="text-xl font-semibold mb-4">
          Recent Transactions
        </h2>

        <p className="text-gray-500">
          No transactions yet
        </p>

      </div>

      {/* MODAL */}
      {showModal && (

        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6">

            <h2 className="text-xl font-bold mb-4">

              {transactionType === "income"
                ? "Add Income"
                : "Add Expense"}

            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                required
              />

              <input
                type="text"
                name="note"
                placeholder="Note"
                value={formData.note}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                required
              />

              <input
                type="text"
                name="category"
                placeholder="Category"
                value={formData.category}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                required
              />

              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2"
                required
              />

              {/* ACTIONS */}
              <div className="flex justify-end gap-3 pt-2">

                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className={`px-4 py-2 rounded-lg text-white ${
                    transactionType === "income"
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-red-500 hover:bg-red-600"
                  }`}
                >
                  Add
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
};

export default Dashboard;