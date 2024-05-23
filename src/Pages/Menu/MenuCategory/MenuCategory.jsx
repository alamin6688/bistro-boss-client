import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, title, img }) => {


  return (
    <div>
        { title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-6 pt-4 my-10 mb-8 p-4">
        {
            items.map((item) => (
              <MenuItem 
                key={item._id} 
                item={item}
              ></MenuItem>
            ))
        }
      </div>
      <div className="text-center mb-12">
          <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 font-bold uppercase">
              ORDER YOUR FAVOURITE FOOD
          </button>
          </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
