import React, { useRef } from 'react';
import { uploadFloorPlan } from '../../api/axios';

const FloorPlanUploader = ({ setFloorPlan }) => {
  const fileInputRef = useRef(null);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        const reader = new FileReader();
        reader.onload = (e) => {
          setFloorPlan(e.target.result); 
        };
        reader.readAsDataURL(file);

        const response = await uploadFloorPlan(file);
        console.log('Floor plan uploaded successfully:', response);
        // If the server returns the URL or ID of the uploaded image, you might want to update the state with that.
        // For now, we'll stick with the local preview URL.
      } catch (error) {
        console.error('Error uploading floor plan:', error);
        alert('도면 업로드에 실패했습니다.');
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-3">도면 업로드</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={fileInputRef}
        style={{ display: 'none' }}
      />
      <button
        onClick={handleButtonClick}
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        도면 파일 선택
      </button>
      <p className="text-sm text-gray-500 mt-2">이미지 파일을 업로드하세요 (JPG, PNG 등)</p>
    </div>
  );
};

export default FloorPlanUploader;