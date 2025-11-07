import React from 'react';
import Layout from '../components/common/Layout';
import Login from '../components/auth/Login';

const LoginPage = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <Login />
      </div>
    </Layout>
  );
};

export default LoginPage;