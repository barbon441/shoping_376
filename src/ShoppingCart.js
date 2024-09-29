import React, { useState } from 'react';

const ShoppingCart = ({ cart, removeFromCart, coupon, applyCoupon, handleCheckout }) => {
  const [couponInput, setCouponInput] = useState('');

  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = coupon === 'DISCOUNT10' ? 0.1 * subtotal : 0;
    const shippingCost = cart.length > 0 ? 100 : 0; // เพิ่มค่าขนส่งเฉพาะเมื่อมีสินค้าในตะกร้า
    return subtotal - discount + shippingCost;
  };

  return (
    <div className="w-1/2">
      <h2 className="text-2xl font-bold">รายการสินค้า</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="border-b py-2">
            {item.name} - ${item.price} x {item.quantity}
            <button className="bg-red-500 text-white px-2 py-1 ml-2" onClick={() => removeFromCart(item.id)}>ลบ</button>
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <input
          type="text"
          value={couponInput}
          onChange={(e) => setCouponInput(e.target.value)}
          placeholder="ใส่รหัสคูปอง"
          className="border px-4 py-2"
        />
        <button className="bg-green-500 text-white px-4 py-2 ml-2" onClick={() => applyCoupon(couponInput)}>
          ใช้คูปอง
        </button>
      </div>
      <div className="mt-4">
        <h3>รวมทั้งหมด: ${calculateTotal().toFixed(2)}</h3> {/* แสดงราคารวม */}
      </div>
      <button
        onClick={handleCheckout} // ใช้ handleCheckout ที่รับมาจาก props
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        ยืนยันคำสั่งซื้อ
      </button>
    </div>
  );
};

export default ShoppingCart;
