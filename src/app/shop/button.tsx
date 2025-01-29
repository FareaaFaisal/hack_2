import { useState } from 'react';

const QuantityInput = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className="px-2 py-1 border border-gray-300 rounded-l-md hover:bg-gray-100"
        onClick={handleDecrement}
      >
        -
      </button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        className="w-12 text-center border border-gray-300"
      />
      <button
        className="px-2 py-1 border border-gray-300 rounded-r-md hover:bg-gray-100"
        onClick={handleIncrement}
      >
        +
      </button>
    </div>
  );
};