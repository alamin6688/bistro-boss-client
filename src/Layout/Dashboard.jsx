import { FaBook, FaCalendar, FaHome, FaList, FaListUl, FaShoppingCart, FaUsers } from "react-icons/fa";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import { MdEmail, MdReviews, MdShoppingBag } from "react-icons/md";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";
import { ImSpoonKnife } from "react-icons/im";


const Dashboard = () => {

    const [cart] = useCart();

    // TODO: get Admin value from the database
    const isAdmin = true;

    return (
        <div className="flex">
            {/* Dashboard Side Bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4">
                    {
                        isAdmin ? 
                        <>
                        <li>
                            <NavLink to="/dashboard/adminHome">
                                <FaHome/>
                                Admin Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/addItems">
                                <ImSpoonKnife />
                                Add Items
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/manageItems">
                                <FaListUl/>
                                Manage Items 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/bookings">
                                <FaBook/>
                                Manage Bookings 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/dashboard/users">
                                <FaUsers/>
                                All Users
                            </NavLink>
                        </li>
                        </>
                        :
                        <>
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
                                My Cart({cart.length})
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
                        </>
                    }
                    {/* Shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome/>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/menu">
                            <IoMenu/>
                            Menu
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad">
                            <MdShoppingBag/>
                            Shop
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <MdEmail/>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            {/* Dashboard Content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;