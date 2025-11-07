import React from 'react';
import Layout from '../components/common/Layout';
import Signup from '../components/auth/Signup';

const SignupPage = () => {
  return (
    <Layout>
      <div className="flex justify-center items-center h-screen">
        <Signup />
      </div>
    </Layout>
  );
};

export default SignupPage;