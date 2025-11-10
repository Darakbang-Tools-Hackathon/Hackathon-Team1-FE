import React, { useState, useEffect } from 'react';
import { getSubScores } from '../../api/mock';
import Card from '../common/Card';

const VitaScoreComposition = () => {
  const [subScores, setSubScores] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const scores = await getSubScores();
        setSubScores(scores);
      } catch (error) {
        console.error('Error fetching sub-scores:', error);
      }
    };
    fetchData();
  }, []);

  const scoreDetails = [
    { name: '외출 점수', key: 'outing', weight: 40, icon: '🚪' },
    { name: '수면 점수', key: 'sleep', weight: 30, icon: '😴' },
    { name: '식사 점수', key: 'meal', weight: 30, icon: '🍽️' },
  ];

  const totalScore = subScores
    ? Math.round(
        (subScores.outing || 0) * 0.4 + 
        (subScores.sleep || 0) * 0.3 + 
        (subScores.meal || 0) * 0.3
      )
    : null;

  return (
    <Card title="오늘 VITA-Score 구성">
      <div className="flex justify-around">
        {scoreDetails.map((item) => (
          <div key={item.name} className="text-center">
            <div className="text-2xl mb-1">{item.icon}</div>
            <div className="font-semibold text-sm">{item.name}</div>
            <div className="text-xs text-gray-500">({item.weight}%)</div>
            <div className="text-lg font-bold">{subScores ? subScores[item.key] : '-'}점</div>
          </div>
        ))}
      </div>
      {totalScore !== null && (
        <div className="mt-4 pt-4 border-t text-center">
          <div className="text-lg font-semibold">오늘 총점</div>
          <div className="text-3xl font-bold text-indigo-600">{totalScore}점</div>
        </div>
      )}
    </Card>
  );
};

export default VitaScoreComposition;