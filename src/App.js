import React, { useState } from 'react';
import ProductList from './ProductList';
import ShoppingCart from './ShoppingCart';
import Coupon from './Coupon';
import Total from './Total';

function App() {
  const [cart, setCart] = useState([]);
  const [coupon, setCoupon] = useState('');
  const [showPaymentPopup, setShowPaymentPopup] = useState(false); // เพิ่ม state สำหรับแสดงป๊อปอัพ

  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const applyCoupon = (code) => {
    setCoupon(code);
  };

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("ไม่มีสินค้าในตะกร้า");
      return;
    }
    
    setShowPaymentPopup(true); // แสดงป๊อปอัพสำหรับเลือกวิธีการชำระเงิน
  };

  const handlePaymentMethod = (method) => {
    if (method === 'cash') {
      alert("ชำระเงินปลายทาง ขอบคุณสำหรับการสั่งซื้อ");
    } else {
      alert("ชำระด้วยธนาคาร ขอบคุณสำหรับการสั่งซื้อ");
    }
    setCart([]); // เคลียร์ตะกร้าหลังการซื้อ
    setShowPaymentPopup(false); // ซ่อนป๊อปอัพ
  };

  const calculateTotal = () => {
    if (cart.length === 0) return 0;
    
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const discount = coupon === 'DISCOUNT10' ? 0.1 * subtotal : 0;
    const shippingCost = cart.length > 0 ? 100 : 0;
    return subtotal - discount + shippingCost;
  };
  
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold text-center my-5">Shopping 376</h1>
      
      <div className="flex">
        <ProductList addToCart={addToCart} />
        <div className="w-1/2 pl-4">
          <ShoppingCart 
            cart={cart} 
            removeFromCart={removeFromCart} 
            applyCoupon={applyCoupon} 
            handleCheckout={handleCheckout} 
          />
          <Coupon applyCoupon={applyCoupon} />
          <Total total={calculateTotal()} />
        </div>
      </div>

      {/* ป๊อปอัพสำหรับการเลือกวิธีการชำระเงิน */}
      {showPaymentPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded">
            <h2 className="text-lg font-bold">เลือกวิธีการชำระเงิน</h2>
            <button 
              onClick={() => handlePaymentMethod('cash')} 
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
              ชำระเงินปลายทาง
            </button>
            <button 
              onClick={() => handlePaymentMethod('bank')} 
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded ml-2"
            >
              ชำระด้วยธนาคาร
            </button>
            <button 
              onClick={() => setShowPaymentPopup(false)} 
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded ml-2"
            >
              ยกเลิก
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
