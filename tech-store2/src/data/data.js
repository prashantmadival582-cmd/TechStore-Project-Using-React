import samsung from "../assets/samsung.jpg";
import apple from "../assets/Apple.jpg";
import imac from "../assets/imac.webp";
import laptop from "../assets/laptop.jpg";
import laptop2 from "../assets/laptop2.jpg";
import watch1 from "../assets/watch1.jpg";
import watch2 from "../assets/watch2.jpg";
import earpod1 from "../assets/earpod1.jpg";
import earbuds2 from "../assets/earbuds2.jpg";

const products = [
  {
    id: 1,
    category: "Smartphone",
    brand: "Samsung",
    name: "Samsung Galaxy S25 Ultra",
    price: 109999,
    originalPrice: 124999,
    rating: 4.8,
    reviews: 2841,
    stock: 18,
    storage: ["256GB", "512GB"],
    colors: ["Black", "Silver", "Blue"],
    image: samsung,
    isBestSeller: true,
  },

  {
    id: 2,
    category: "Smartphone",
    brand: "Apple",
    name: "Apple iPhone 17 Pro",
    price: 149999,
    originalPrice: 164999,
    rating: 4.9,
    reviews: 3568,
    stock: 12,
    storage: ["256GB", "512GB", "1TB"],
    colors: ["Black", "Titanium", "Blue"],
    image: apple,
    isBestSeller: true,
  },

  {
    id: 3,
    category: "Desktop",
    brand: "Apple",
    name: "Apple iMac Retina 5K",
    price: 189999,
    originalPrice: 204999,
    rating: 4.8,
    reviews: 972,
    stock: 7,
    storage: ["512GB", "1TB"],
    colors: ["Silver"],
    image: imac,
    isBestSeller: true,
  },

  {
    id: 4,
    category: "Laptop",
    brand: "Apple",
    name: "MacBook Pro M4",
    price: 169999,
    originalPrice: 184999,
    rating: 4.9,
    reviews: 2214,
    stock: 10,
    storage: ["512GB", "1TB"],
    colors: ["Space Black", "Silver"],
    image: laptop,
    isBestSeller: true,
  },

  {
    id: 5,
    category: "Laptop",
    brand: "Samsung",
    name: "Galaxy Book 5 Pro",
    price: 129999,
    originalPrice: 144999,
    rating: 4.7,
    reviews: 1186,
    stock: 15,
    storage: ["512GB", "1TB"],
    colors: ["Gray", "Silver"],
    image: laptop2,
    isBestSeller: false,
  },

  {
    id: 6,
    category: "Watch",
    brand: "Apple",
    name: "Apple Watch Series 11",
    price: 49999,
    originalPrice: 54999,
    rating: 4.8,
    reviews: 1843,
    stock: 24,
    storage: ["GPS", "GPS + Cellular"],
    colors: ["Black", "Silver", "Rose Gold"],
    image: watch1,
    isBestSeller: true,
  },

  {
    id: 7,
    category: "Watch",
    brand: "Samsung",
    name: "Galaxy Watch Ultra",
    price: 44999,
    originalPrice: 49999,
    rating: 4.7,
    reviews: 1364,
    stock: 20,
    storage: ["47mm"],
    colors: ["Black", "Titanium"],
    image: watch2,
    isBestSeller: false,
  },

  {
    id: 8,
    category: "Audio",
    brand: "Apple",
    name: "AirPods Pro 3",
    price: 24999,
    originalPrice: 27999,
    rating: 4.9,
    reviews: 4216,
    stock: 35,
    storage: ["USB-C"],
    colors: ["White"],
    image: earpod1,
    isBestSeller: true,
  },

  {
    id: 9,
    category: "Audio",
    brand: "Samsung",
    name: "Galaxy Buds 3 Pro",
    price: 19999,
    originalPrice: 22999,
    rating: 4.8,
    reviews: 2758,
    stock: 28,
    storage: ["Standard"],
    colors: ["White", "Silver"],
    image: earbuds2,
    isBestSeller: false,
  },
];

export default products;