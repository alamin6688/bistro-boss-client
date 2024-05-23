import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";
import { Link } from "react-router-dom";

const PopularMenu = () => {

  const [menu] = useMenu();
  const popular = menu.filter(item => item.category === 'popular');


  return (
    <section>
      <SectionTitle
        subHeading={"------Check it out------"}
        heading={"Popular MENU"}
      ></SectionTitle>
        <div className="grid md:grid-cols-2 gap-6 pt-4 mb-6 p-4">
            {
                popular.map(item => <MenuItem 
                    key={item._id}
                    item={item}
                ></MenuItem>)
            }
        </div>
        <div className="text-center mb-12">
          <Link to="/menu">
        <button className="btn btn-outline border-0 border-b-4 font-bold">
          View Full Menu
        </button>
        </Link>
        </div>
    </section>
  );
};

export default PopularMenu;
