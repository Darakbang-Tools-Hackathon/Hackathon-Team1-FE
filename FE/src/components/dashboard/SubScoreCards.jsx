import React from 'react';
import Card from '../common/Card';

const SubScoreCards = () => {
  const soundClasses = [
    { name: '식사', icon: '🍽️' },
    { name: '대화', icon: '💬' },
    { name: '문', icon: '🚪' },
  ];

  return (
    <Card title="실시간 소리 감지">
      <div className="flex justify-around">
        {soundClasses.map((item) => (
          <div key={item.name} className="text-center">
            <div className="text-4xl">{item.icon}</div>
            <div>{item.name}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default SubScoreCards;
