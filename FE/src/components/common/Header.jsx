import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">소리 감지 시스템</Link>
        <nav>
          <Link to="/dashboard" className="mr-4">대시보드</Link>
          <Link to="/placement" className="mr-4">위치 추천</Link>
        </nav>
        <div>
          {user ? (
            <>
              <span className="mr-4">환영합니다, {user.email}님</span>
              <button onClick={logout} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                로그아웃
              </button>
            </>
          ) : (
            <Link to="/login">로그인</Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;