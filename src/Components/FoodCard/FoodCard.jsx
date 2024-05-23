

const FoodCard = ({item}) => {

    const {name, image, price, recipe} = item;

  return (
    <div className="card bg-base-00 shadow-2xl py-8">
      <figure>
        <img src={image} alt="Food Image" />
      </figure>
        <p className="absolute right-0 mt-4 mr-5 px-2 bg-slate-900 text-center text-white">
            $ {price}
        </p>
      <div className="card-body text-center space-y-2">
        <h2 className="card-title mx-auto font-bold text-2xl">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button className="btn btn-outline border-0 border-b-4 text-yellow-400 hover:text-yellow-400 hover:border-b-4 hover:border-yellow-400 font-bold bg-[#E8E8E8] uppercase">
                Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
