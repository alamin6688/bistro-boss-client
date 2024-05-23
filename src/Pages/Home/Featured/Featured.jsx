import { Link } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white mb-20 pt-8 shadow-2xl">
      <SectionTitle
        subHeading={"------Check it out------"}
        heading={"FEATURED MENU"}
      ></SectionTitle>
      <div className="md:flex bg-slate-500 bg-opacity-40 justify-center items-center py-16 px-6 md:px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10 space-y-2">
          <p className="font-semibold mt-4">March 20, 2023 </p>
          <p className="font-bold"> WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas
            quasi.Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <Link to="/order/salad">
          <button className="btn btn-outline border-0 border-b-4"><span className="text-white font-bold">Order Now</span></button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
