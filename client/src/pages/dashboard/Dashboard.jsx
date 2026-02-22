import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../api/axios";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await api.get("/users/current");
        setUser(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 p-4">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl border border-gray-100 p-8 text-center">

        {user ? (
          <>
            <h1 className="text-3xl font-bold text-gray-800 mb-3">
              Welcome, {user.first_name} 👋
            </h1>

            <p className="text-gray-600 mb-8">
              You're successfully logged in.
            </p>

            <button
              onClick={handleLogout}
              className="w-full py-2.5 rounded-lg bg-linear-to-r from-red-500 to-pink-600 text-white font-semibold shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <p className="text-gray-700 text-lg">Loading...</p>
        )}

      </div>

    </div>
  );
};

export default Dashboard;