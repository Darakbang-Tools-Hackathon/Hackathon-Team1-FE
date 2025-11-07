import React, { useRef, useEffect, useState } from 'react';
import Card from '../common/Card';
import Button from '../common/Button';
import { getSensorLocations } from '../../api/axios';

const PlacementCanvas = ({ floorPlan }) => {
  const canvasRef = useRef(null);
  const [sensorLocations, setSensorLocations] = useState([]);

  const drawSensors = (context, locations) => {
    context.fillStyle = 'red';
    locations.forEach(point => {
      context.beginPath();
      context.arc(point.x, point.y, 5, 0, 2 * Math.PI); // Smaller radius for sensors
      context.fill();
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    const loadImageAndDraw = () => {
      if (floorPlan) {
        const image = new Image();
        image.src = floorPlan;
        image.onload = () => {
          canvas.width = image.width;
          canvas.height = image.height;
          context.drawImage(image, 0, 0);
          drawSensors(context, sensorLocations);
        };
      } else {
        context.clearRect(0, 0, canvas.width, canvas.height);
      }
    };

    loadImageAndDraw();
  }, [floorPlan, sensorLocations]); // Redraw when floorPlan or sensorLocations change

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await getSensorLocations();
        setSensorLocations(data);
      } catch (error) {
        // Handle error, e.g., show a message to the user
        console.error("Failed to fetch sensor locations:", error);
      }
    };

    fetchLocations();
  }, []); // Fetch once on component mount

  return (
    <Card title="설치 위치 추천">
      <canvas ref={canvasRef} className="w-full h-auto border" />
      <div className="mt-4">
        {/* The button can now trigger a re-draw if needed, or be removed if drawing is automatic */}
        <Button onClick={() => {
          const canvas = canvasRef.current;
          const context = canvas.getContext('2d');
          context.clearRect(0, 0, canvas.width, canvas.height); // Clear before redrawing
          if (floorPlan) {
            const image = new Image();
            image.src = floorPlan;
            image.onload = () => {
              canvas.width = image.width;
              canvas.height = image.height;
              context.drawImage(image, 0, 0);
              drawSensors(context, sensorLocations);
            };
          }
        }}>추천 위치 다시 그리기</Button>
      </div>
    </Card>
  );
};

export default PlacementCanvas;