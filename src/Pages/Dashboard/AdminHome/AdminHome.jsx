import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaBook, FaDollarSign, FaUsers } from "react-icons/fa";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-3xl font-semibold italic mb-6">
        <span>Hi, Welcome </span>
        {user?.displayName ? user.displayName : "Back"}
      </h2>
      <div className="stats shadow flex">
        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaDollarSign className="text-4xl text-green-600"></FaDollarSign>
          </div>
          <div className="stat-title font-semibold">Revenue</div>
          <div className="stat-value">{stats.revenue}</div>
          <div className="stat-desc font-bold">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaUsers className="text-4xl text-gray-600"></FaUsers>
          </div>
          <div className="stat-title font-semibold">Users</div>
          <div className="stat-value">{stats.users}</div>
          <div className="stat-desc font-bold">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <FaBook className="text-4xl text-orange-600"></FaBook>
          </div>
          <div className="stat-title font-semibold">Menu Items</div>
          <div className="stat-value">{stats.menuItems}</div>
          <div className="stat-desc font-bold">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-figure text-3xl text-blue-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
              ></path>
            </svg>
          </div>
          <div className="stat-title font-semibold">Orders</div>
          <div className="stat-value">{stats.orders}</div>
          <div className="stat-desc font-bold">↘︎ 90 (14%)</div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
