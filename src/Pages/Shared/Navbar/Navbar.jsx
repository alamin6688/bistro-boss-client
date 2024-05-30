import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import useAdmin from "../../../Hooks/useAdmin";


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();

    const handleLogout = () =>{
      logOut()
        .then(()=>{})
        .catch(error => console.error(error))
    }

    const navLinks = <>
    <Link to="/" className='mr-6 text-yellow-400 font-bold'>Home</Link>
    <Link to="/menu" className='mr-6'>Our Menu </Link>
    <Link to="/order/salad" className='mr-6'>Order Food</Link>
    {
      user && isAdmin && 
        <Link to="/dashboard/adminHome" className="mr-6">Dashboard</Link>
    }
    {
      user && !isAdmin && 
        <Link to="/dashboard/userHome" className="mr-6">Dashboard</Link>
    }
    <Link to="/dashboard/cart" className='mr-6'>
      <div className="flex items-center gap-1">
        <FaShoppingCart/>
      <div className="badge badge-secondary">+{cart.length}</div>
      </div>
    </Link>
    {
      user? <>
      <Link onClick={handleLogout}>Logout</Link>
      </> : 
      <>
      <Link to="/login" className='mr-6'>Login  </Link>
      </>
    }
    </>

  return(                       
    <>
      <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-4 shadow space-y-1 bg-gray-200 rounded-box w-52"
            >
                {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">BISTRO BOSS</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <button className="btn bg-yellow-400 hover:bg-yellow-500 text-black border-none hover:font-bold">
            <Link to="/order/salad">Get Started</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
