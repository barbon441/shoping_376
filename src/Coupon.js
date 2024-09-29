// components/Coupon.js
import React, { useState } from 'react';

function Coupon({ applyCoupon }) {
  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = () => {
    applyCoupon(couponCode);
  };

  return (
    <div className="mt-4">
      <input
        type="text"
        value={couponCode}
        onChange={(e) => setCouponCode(e.target.value)}
        placeholder="เพิ่มรหัสคูปอง"
        className="border px-4 py-2"
      />
      <button className="bg-green-500 text-white px-4 py-2 ml-2" onClick={handleApplyCoupon}>
        เพิ่มคูปอง
      </button>
    </div>
  );
}

export default Coupon;
