import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">소리 감지 시스템</Link>
        <nav>
          <Link to="/dashboard" className="mr-4">대시보드</Link>
          <Link to="/placement" className="mr-4">위치 추천</Link>
        </nav>
        <div>
          <Link to="/login" className="mr-4">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
