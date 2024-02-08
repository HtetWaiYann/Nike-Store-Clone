export interface Item {
  id: string;
  title: string;
  text: string;
  rating: string;
  btn: string;
  img: string;
  price: string;
  color: string;
  shadow: string;
}

export interface SalesProps {
  title: string;
  items: Item[];
}
