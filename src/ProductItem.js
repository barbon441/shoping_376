import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="border p-4">
      <img src={product.imageSrc} alt={product.imageAlt} className="w-full h-48 object-cover" />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.color}</p>
      <p className="text-lg font-bold">${product.price}</p>
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => addToCart(product)} // เรียกใช้ฟังก์ชันเมื่อกดปุ่ม
      >
        เพิ่มสินค้า
      </button>
    </div>
  );
};

export default ProductItem;
