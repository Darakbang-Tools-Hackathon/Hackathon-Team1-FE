import React, { useState } from 'react';
import Layout from '../components/common/Layout';
import FloorPlanUploader from '../components/placement/FloorPlanUploader';
import PlacementCanvas from '../components/placement/PlacementCanvas';

const PlacementPage = () => {
  const [floorPlan, setFloorPlan] = useState(null);

  return (
    <Layout>
      <h1 className="text-2xl font-bold mb-4">장비 설치 위치 추천</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="md:col-span-1">
          <FloorPlanUploader setFloorPlan={setFloorPlan} />
        </div>
        <div className="md:col-span-3">
          <PlacementCanvas floorPlan={floorPlan} />
        </div>
      </div>
    </Layout>
  );
};

export default PlacementPage;