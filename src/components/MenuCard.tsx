'use client';

import { MenuItem } from '@/data/menu';
import Image from 'next/image';
import { useState } from 'react';

interface MenuCardProps {
  item: MenuItem;
}

export default function MenuCard({ item }: MenuCardProps) {
  const [imgSrc, setImgSrc] = useState(item.image);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 group">
      <div className="relative h-48 overflow-hidden bg-[#FFF8E7]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#3D2314]/60 to-transparent z-10" />
        <Image
          src={imgSrc}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={() => setImgSrc('/images/placeholder.svg')}
        />
        <div className="absolute top-3 left-3 z-20 flex gap-2">
          {item.isPopular && (
            <span className="bg-[#C41E3A] text-white text-xs px-2 py-1 rounded-full font-medium">
              Popular
            </span>
          )}
          {item.isVegan && (
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full font-medium">
              Vegan
            </span>
          )}
          {item.isVegetarian && !item.isVegan && (
            <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Veg
            </span>
          )}
        </div>
        <div className="absolute bottom-3 right-3 z-20">
          <span className="bg-[#FF9933] text-[#3D2314] font-bold text-lg px-3 py-1 rounded-lg">
            ${item.price.toFixed(2)}
          </span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-[#3D2314] group-hover:text-[#C41E3A] transition-colors">
            {item.name}
          </h3>
          {item.isHalal && (
            <span className="text-green-600 text-xs bg-green-50 px-2 py-1 rounded">
              Halal
            </span>
          )}
        </div>
        <p className="text-sm text-[#3D2314]/70 line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
}
