'use client'

import { useState } from 'react';
import Image from 'next/image';

export default function HeartLike() {
  const [isLiked, setIsLiked] = useState(false);

  const handleClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="flex gap-2">
      <div onClick={handleClick} className="cursor-pointer">
        <Image
          src={isLiked ? "/HeartRed.png" : "/Heart.svg"} // Conditionally render the heart icon
          alt="heart icon"
          width={24}
          height={24}
        />
      </div>
      <p className='text-gray-600'>Like</p>
    </div>
  );
}
