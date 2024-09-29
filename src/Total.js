import React from 'react';

const Total = ({ total }) => {
  return (
    <div className="mt-4">
      <h2 className="text-xl font-bold">ราคาสินค้า</h2>
      <p className="text-lg">{total >= 0 ? `$${total.toFixed(2)}` : '$0.00'}</p> {/* แสดงราคารวม */}
    </div>
  );
};

export default Total;

