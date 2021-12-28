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
}

export interface ProductsProps {
  products: Product[];
}

export interface ProductProps {
  product: Product;
}
