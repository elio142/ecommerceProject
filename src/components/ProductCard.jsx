import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative pt-[100%]">
                <img
                    src={product.image}
                    alt={product.title}
                    className="absolute top-0 left-0 w-full h-full object-contain p-4"
                />
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                    {product.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {product.description}
                </p>
                <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-gray-900">
                        ${product.price}
                    </span>
                    <div className="flex gap-2">
                        <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600 transition-colors">
                            <Heart className="h-5 w-5" size={18} />
                        </button>
                        <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                            <ShoppingCart className="h-5 w-5" size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;