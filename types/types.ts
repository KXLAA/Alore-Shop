export interface ProductProps {
  id: string;
  name: string;
  url: string;
  description: string;
  image: string;
  price: number;
  genre: string;
}

export interface ProductsProps {
  products: ProductProps[];
}
