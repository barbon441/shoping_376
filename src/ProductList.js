import React from 'react';
import ProductItem from './ProductItem'; // Import ProductItem component

const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35,
    color: 'Black',
  },
  {
    id: 2,
    name: 'Casual Shirt',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Casual Shirt in white.",
    price: 45,
    color: 'White',
  },
  {
    id: 3,
    name: 'Sneakers',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg',
    imageAlt: "Pair of sneakers in gray.",
    price: 65,
    color: 'Gray',
  },
  {
    id: 4,
    name: 'Leather Wallet',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg',
    imageAlt: 'Brown leather wallet.',
    price: 25,
    color: 'Brown',
  },
  {
    id: 5,
    name: 'Sports Watch',
    href: '#',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfDm35w0Yf7B303Gyuy-pYwveN5Gw334aVfw&s',
    imageAlt: 'Sports watch with digital display.',
    price: 120,
    color: 'Black',
  },
  {
    id: 6,
    name: 'Backpack',
    href: '#',
    imageSrc: 'https://m.media-amazon.com/images/I/81OFxhFWmML._AC_UY1000_.jpg',
    imageAlt: 'Large backpack for outdoor use.',
    price: 75,
    color: 'Green',
  },
  {
    id: 7,
    name: 'Sunglasses',
    href: '#',
    imageSrc: 'https://www.roka.com/cdn/shop/files/BARTON-2.0_CRYSTALGREY_FRONT_GLACIER_1600x.jpg?v=1711571369',
    imageAlt: 'Pair of black sunglasses.',
    price: 30,
    color: 'Black',
  },
  {
    id: 8,
    name: 'Wireless Earbuds',
    href: '#',
    imageSrc: 'https://resource.logitech.com/content/dam/logitech/en/products/video-conferencing/zone-true-wireless-earbuds/zone-true-wireless-earbuds-gallery-1-graphite.png',
    imageAlt: 'Pair of white wireless earbuds.',
    price: 50,
    color: 'White',
  },
  {
    id: 9,
    name: 'Bluetooth Speaker',
    href: '#',
    imageSrc: 'https://www.sencor.com/getmedia/6770caad-d0be-4d0d-b5f0-01bbc4c1c555/35059169.jpg.aspx?width=2100&height=2100&ext=.jpg',
    imageAlt: 'Portable Bluetooth speaker.',
    price: 40,
    color: 'Blue',
  },
  {
    id: 10,
    name: 'Fitness Tracker',
    href: '#',
    imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV0nzKZsRE8bEQyK0JLqC0RmzWh35481xlhQ&s',
    imageAlt: 'Fitness tracker with heart rate monitor.',
    price: 90,
    color: 'Red',
  }
];

const ProductList = ({ addToCart }) => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">ลิสสินค้า</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductItem key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
