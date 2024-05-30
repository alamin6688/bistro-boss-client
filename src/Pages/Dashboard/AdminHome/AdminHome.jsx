import useAuth from "../../../Hooks/useAuth";
// import useAxiosSecure from "../../../Hooks/useAxiosSecure";


const AdminHome = () => {

    const { user } = useAuth();
    // const axiosSecure = useAxiosSecure();

    return (
        <div>
            <h2 className="text-3xl font-semibold italic">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
            </h2>
        </div>
    );
};

export default AdminHome;