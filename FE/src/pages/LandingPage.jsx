import React, { useState } from 'react';
import Layout from '../components/common/Layout';
import Login from '../components/auth/Login';
import Signup from '../components/auth/Signup';

const LandingPage = () => {

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold mb-4">소리 감지 대시보드</h1>
        <p className="text-lg mb-8">노인 가정의 소리를 감지하여 상태를 모니터링하는 시스템입니다.</p>
      </div>
    </Layout>
  );
};

export default LandingPage;