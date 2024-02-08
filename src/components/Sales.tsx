import { SalesProps } from "../interface/sales";
import Item from "./utils/Item";
import Title from "./utils/Title";

const Sales = ({sales} : {sales: SalesProps}) => {
  return (
    <div>
      <Title title={sales.title} />
      <div>
        {sales.items.map((item, index) => (
          <Item item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Sales;
