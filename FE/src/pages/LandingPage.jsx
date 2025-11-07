import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">소리 감지 대시보드</h1>
      <p className="text-lg mb-8">노인 가정의 소리를 감지하여 상태를 모니터링하는 시스템입니다.</p>
      <div className="flex gap-4">
        <Link to="/dashboard">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            대시보드로 이동
          </button>
        </Link>
        <Link to="/placement">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            장비 설치 위치 추천
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;