import { ShoppingBagIcon, StarIcon } from "@heroicons/react/24/solid";
import { Item } from "../../interface/sales";

const Item = ({ item }: { item: Item }) => {
  return (
    <div
      className={`relative bg-gradient-to-b ${item.shadow} ${item.color} grid items-center justify-items-center`}
    >
      <div className="grid items-center justify-items-center">
        <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
          {item.title}
        </h1>
        <p className="text-slate-200 filter drop-shadow text-base md:text-sm font-normal">
          {item.text}
        </p>
        <div className="flex items-center justify-between w-28 my-2">
          <div className="flex items-center bg-white/80  px-1 rounded blur-effect-theme">
            <h1 className="text-black text-sm font-medium">${item.price}</h1>
          </div>
          <div className="flex items-center gap-1">
            <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
            <h1 className="md:text-sm font-normal text-slate-100">
              {item.rating}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="bg-white/90 blur-effect-theme button-theme p-0.5 shadow shadow-sky-200"
          >
            <ShoppingBagIcon className="icon-style text-slate-900" />
          </button>
          <button
            type="button"
            className="bg-white/90 blur-effect-theme button-theme px-2 py-1 shadow shadow-sky-200 text-sm text-black"
          >
            {item.btn}
          </button>
        </div>
      </div>
      <div className="flex items-center">
        <img src={item.img} alt="img/item" className="" />
      </div>
    </div>
  );
};

export default Item;
