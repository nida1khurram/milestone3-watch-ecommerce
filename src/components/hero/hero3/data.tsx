// Define the structure of our product data
export interface Product {
  id: number;
  title: string;
  discount: string;
  price: number;
  oldprice: number;
  image: string;
}

// Export our product data
export const products: Product[] = [
  {
    id: 1,
    title: "Singo Maple",
    discount: "20% Off",
    oldprice: 1500.000,
    price: 1.264000,
    image: "/images/hero/h3-1.png",
  },
  {
    id: 2,
    title: "Singo Ebony",
    discount: "20% Off",
    oldprice:  1500.000,
    price: 1.264000,
    image: "/images/hero/h3-2.png",
  },
  {
    id: 3,
    title: "Rakai Ebony",
    discount: "15% Off",
    oldprice: 1280.000,
    price: 1.118000,
    image: "/images/hero/h3-3.png",
  },
  {
    id: 4,
    title: "Way Kambas Mini Maple",
    discount: "10% Off",
    oldprice:1280.000,
    price: 1.024000,
    image: "/images/hero/h3-4.png",
  },
];

