interface Images {
  url: string;
}

export interface Product {
  title: string;
  artist: string;
  id: string;
  name: string;
  slug: string;
  description: string;
  images: Images[];
  price: number;
  genre: string;
  count: number;
}

export interface ProductsProps {
  products: Product[];
}

export interface ProductProps {
  product: Product;
}

export interface IProduct {
  title: string;
  artist: string;
  id: string;
  name: string;
  slug: string;
  description: string;
  images: Images[];
  price: number;
  genre: string;
  count: number;
}
