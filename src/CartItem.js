// components/CartItem.js
import React from 'react';

function CartItem({ item, removeFromCart }) {
  return (
    <li className="flex justify-between py-2">
      <span>{item.name} - ${item.price} x {item.quantity}</span>
      <button className="bg-red-500 text-white px-4 py-1" onClick={() => removeFromCart(item.id)}>
        ลบ
      </button>
    </li>
  );
}

export default CartItem;
