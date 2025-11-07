import React, { useRef, useEffect } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';

const PlacementCanvas = ({ floorPlan }) => {
  const canvasRef = useRef(null);

  const drawRecommendations = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const recommendations = [
      { x: 100, y: 100 },
      { x: 200, y: 150 },
      { x: 300, y: 200 },
    ];

    context.fillStyle = 'red';
    recommendations.forEach(point => {
      context.beginPath();
      context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
      context.fill();
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    if (floorPlan) {
      const image = new Image();
      image.src = floorPlan;
      image.onload = () => {
        canvas.width = image.width;
        canvas.height = image.height;
        context.drawImage(image, 0, 0);
      };
    } else {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
  }, [floorPlan]);

  return (
    <Card title="설치 위치 추천">
      <canvas ref={canvasRef} className="w-full h-auto border" />
      <div className="mt-4">
        <Button onClick={drawRecommendations}>추천 위치 보기</Button>
      </div>
    </Card>
  );
};

export default PlacementCanvas;