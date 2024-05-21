

const MenuItem = ({item}) => {

    const {name, image, price, recipe} = item;

    return (
        <div className="flex space-x-4">
            <img style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" className="w-[80px] h-[80px]" />
            <div>
                <h3 className="uppercase text-xl font-bold">{name}---</h3>
                <p>{recipe}</p>

            </div>
            <div>
            <p className="text-yellow-400">${price}</p>
            </div>
        </div>
    );
};

export default MenuItem;