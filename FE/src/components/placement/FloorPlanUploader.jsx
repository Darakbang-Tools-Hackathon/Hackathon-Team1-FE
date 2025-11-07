import React from 'react';
import Card from '../common/Card';

const FloorPlanUploader = ({ setFloorPlan }) => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setFloorPlan(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card title="도면 업로드">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
    </Card>
  );
};

export default FloorPlanUploader;