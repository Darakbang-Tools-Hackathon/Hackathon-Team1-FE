import React from 'react';
import Layout from '../components/common/Layout';
import AlertHistory from '../components/dashboard/AlertHistory';
import VitaScoreChart from '../components/dashboard/VitaScoreChart';
import VitaScoreComposition from '../components/dashboard/VitaScoreComposition';

const DashboardPage = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <VitaScoreChart />
        </div>
        <div className="md:col-span-1">
          <VitaScoreComposition />
        </div>
        <div className="md:col-span-3">
          <AlertHistory />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;
