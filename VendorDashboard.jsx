import React, { useState } from 'react';

const VendorDashboard = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Electronics');
  const [stock, setStock] = useState('');

  const handleAddProduct = (e) => {
    e.preventDefault();
    alert(`Product "${title}" added successfully in draft mode!`);
    setTitle('');
    setPrice('');
    setStock('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 📊 Header & Quick Stats Analytics Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-black text-gray-900 tracking-tight">Vendor Management Panel</h1>
        <p className="text-sm text-gray-500 mt-1">Monitor real-time dashboard profits and list new inventories</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Total Revenue</p>
          <h3 className="text-2xl font-black text-gray-950 mt-2">$14,250.00</h3>
          <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-2 inline-block">↑ 12% This Week</span>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Products Listed</p>
          <h3 className="text-2xl font-black text-gray-950 mt-2">24 Items</h3>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-wider text-gray-500">Active Orders</p>
          <h3 className="text-2xl font-black text-gray-950 mt-2">9 Pending</h3>
        </div>
      </div>

      {/* 📝 Inventory Uploader Form Container */}
      <div className="max-w-xl bg-white p-8 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center">📦 Upload New Product Listing</h2>
        <form onSubmit={handleAddProduct} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Product Title</label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Wireless Gaming Headphones"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Price ($)</label>
              <input
                type="number"
                required
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="99"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Stock Count</label>
              <input
                type="number"
                required
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                placeholder="50"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition-colors font-semibold text-gray-700"
            >
              <option value="Electronics">Electronics</option>
              <option value="Apparel">Apparel</option>
              <option value="Home Goods">Home Goods</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gray-900 text-white font-bold py-3 rounded-lg hover:bg-blue-600 shadow-sm transition-colors text-sm pt-2"
          >
            Publish Live Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default VendorDashboard;
