import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* 🏷️ Brand Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-2xl font-black tracking-tight text-blue-600">
              VENDORA<span className="text-gray-900 text-sm font-semibold ml-1">.store</span>
            </Link>
          </div>

          {/* 🔍 Smart Search Bar */}
          <div className="flex-1 max-w-md mx-8 hidden sm:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search premium products..."
                className="w-full bg-gray-50 border border-gray-300 text-sm rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500 focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* ⚙️ Navigation Links & Auth Actions */}
          <div className="flex items-center space-x-6">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Store
            </Link>
            <Link to="/vendor" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
              Vendor Panel
            </Link>

            {/* 🛒 Shopping Cart (Static Badge) */}
            <div className="relative cursor-pointer py-1">
              <span className="text-xl">🛒</span>
              <span className="absolute -top-1 -right-2 bg-blue-600 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center font-bold">
                0
              </span>
            </div>

            {/* 🔑 User Session Validation Layer */}
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm font-semibold text-gray-900 bg-gray-100 px-3 py-1 rounded-full">
                  👋 {user.name}
                </span>
                <button
                  onClick={logout}
                  className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 shadow-sm transition-all"
              >
                Sign In
              </Link>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
