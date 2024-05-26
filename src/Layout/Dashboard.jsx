import { FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { MdReviews } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* Dashboard Side Bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4">
                    <li>
                        <NavLink to="/dashboard/userHome">
                            <FaHome/>
                            User Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/reservation">
                            <FaCalendar/>
                            Reservation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment">
                            <FaMoneyCheckDollar/>
                            Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/cart">
                            <FaShoppingCart/>
                            My Cart
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/review">
                            <MdReviews/>
                            Add Review
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/booking">
                            <FaList/>
                            My Bookings
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard Content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;