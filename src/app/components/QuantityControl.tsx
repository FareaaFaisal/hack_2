'use client'

import { useState } from 'react';

export default function QuantityControl() {
  const [quantity, setQuantity] = useState(1);
  const maxQuantity = 50;

  const increment = () => {
    if (quantity < maxQuantity) {
      setQuantity(prev => prev + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  return (
    <div className="flex justify-between items-center">
      <button onClick={decrement} className="px-4 py-2 text-gray-500 border border-gray-300">-</button>
      <span className="px-4 py-2 text-gray-500 border border-gray-300">{quantity}</span>
      <button onClick={increment} className="px-4 py-2 text-gray-500 border border-gray-300">+</button>
    </div>
  );
}
