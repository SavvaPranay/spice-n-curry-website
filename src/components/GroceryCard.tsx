'use client';

import { GroceryItem } from '@/data/grocery';
import Image from 'next/image';
import { useState } from 'react';

interface GroceryCardProps {
  item: GroceryItem;
}

export default function GroceryCard({ item }: GroceryCardProps) {
  const [imgSrc, setImgSrc] = useState(item.image);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-40 overflow-hidden bg-[#FFF8E7]">
        <Image
          src={imgSrc}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          onError={() => setImgSrc('/images/placeholder.svg')}
        />
        <div className="absolute top-3 right-3 z-10">
          {item.inStock ? (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              In Stock
            </span>
          ) : (
            <span className="bg-gray-400 text-white text-xs px-2 py-1 rounded-full font-medium">
              Out of Stock
            </span>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-md font-semibold text-[#3D2314] group-hover:text-[#C41E3A] transition-colors mb-1">
          {item.name}
        </h3>
        <p className="text-sm text-[#3D2314]/70 line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}
