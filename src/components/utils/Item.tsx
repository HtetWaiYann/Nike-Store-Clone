import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import { Item } from "../../interface/sales";

const Item = ({ item }: { item: Item }) => {
  return (
    <div className="">
      <div className="">
        <h1 className="">{item.title}</h1>
        <p>{item.text}</p>
        <div className="">
          <div className="">
            <h1 className="">{item.price}</h1>
          </div>
          <div className="">
            <StarIcon className="icon-style text-slate-900" />
            <h1 className="">{item.rating}</h1>
          </div>
        </div>
        <div className="">
          <button type="button" className="">
            <ShoppingBagIcon className="icon-style text-slate-900" />
          </button>
          <button type="button" className="">
            {item.btn}
          </button>
        </div>
      </div>
      <div className="">
        <img src={item.img} alt="img/item" className=""/>
      </div>
    </div>
  );
};

export default Item;
