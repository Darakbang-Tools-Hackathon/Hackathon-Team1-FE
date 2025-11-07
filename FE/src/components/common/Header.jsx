import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  const activeLinkStyle = {
    color: '#4f46e5', // indigo-600
    fontWeight: 'bold',
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <svg 
            className="w-8 h-8 text-indigo-600" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <span className="text-2xl font-bold text-indigo-600">
            VITA-Track
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/dashboard" 
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            대시보드
          </NavLink>
          <NavLink 
            to="/placement" 
            style={({ isActive }) => isActive ? activeLinkStyle : undefined}
            className="text-gray-600 hover:text-indigo-600 transition-colors"
          >
            설치 위치 추천
          </NavLink>
          
        </nav>

        <div className="flex items-center">
          {user ? (
            <>
              <span className="hidden sm:inline mr-4 text-gray-700">환영합니다, {user.email}님</span>
              <button 
                onClick={logout} 
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md transition-all duration-300"
              >
                로그아웃
              </button>
            </>
          ) : (
            <Link 
              to="/login"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition-all duration-300"
            >
              로그인
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;