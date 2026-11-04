import React, { useState, useEffect } from 'react';
import API from './API';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await API.get('/products');
        if (response.data.success) {
          setProducts(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Discover Premium Products</h1>
        <p className="text-sm text-gray-500 mt-1">Explore custom listings from certified vendors worldwide</p>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-xl border border-gray-100 shadow-sm">
          <span className="text-4xl">📦</span>
          <p className="mt-4 text-gray-600 font-medium">No products available in the store right now.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-100 transition-all group flex flex-col justify-between">
              <div>
                {/* 🖼️ Product Preview Image Container */}
                <div className="bg-gray-100 aspect-square w-full flex items-center justify-center text-gray-400 group-hover:scale-105 transition-transform duration-300">
                  {product.images && product.images[0] ? (
                    <img src={product.images[0]} alt={product.title} className="object-cover w-full h-full" />
                  ) : (
                    <span className="text-4xl">🛍️</span>
                  )}
                </div>

                {/* 📝 Details Content Block */}
                <div className="p-4">
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {product.category || 'General'}
                  </span>
                  <h3 className="font-bold text-gray-900 mt-3 text-lg leading-snug line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 line-clamp-2 h-10">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* 💵 Pricing & Cart Action Layer */}
              <div className="p-4 pt-0">
                <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-2">
                  <span className="text-xl font-black text-gray-900">${product.price}</span>
                  <button className="bg-gray-900 text-white text-xs font-bold px-4 py-2.5 rounded-lg hover:bg-blue-600 shadow-sm transition-colors">
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
