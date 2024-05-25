import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Main = () => {

    const location = useLocation();
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')

    return (
        <>
            <div className='max-w-screen-xl mx-auto' >
                { noHeaderFooter || <Navbar></Navbar>}
                <Outlet></Outlet>
            </div>
                { noHeaderFooter || <Footer></Footer>}

        </>
    );
};

export default Main;