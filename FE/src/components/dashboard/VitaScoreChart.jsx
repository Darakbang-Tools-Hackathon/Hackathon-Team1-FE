import React, { useState, useEffect } from 'react';
import { getVitaScores } from '../../api/axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../common/Card';

const VitaScoreChart = () => {
  const [data, setData] = useState([]);
  const [currentYear, setCurrentYear] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const scores = await getVitaScores();
        setData(scores);
        if (scores.length > 0) {
          const latestDate = scores[scores.length - 1].date;
          setCurrentYear(new Date(latestDate).getFullYear().toString());
        }
      } catch (error) {
        console.error('Error fetching vita scores:', error);
      }
    };
    fetchData();
  }, []);

  const formatXAxis = (tickItem) => {
    // "2025-10-01" -> "10-01"
    return tickItem.substring(5);
  };

  return (
    <Card title={<span>Vita-Score 추이 <span className="text-gray-500 text-sm">({currentYear}년)</span></span>}>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={formatXAxis} />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="vitaScore" stroke="#8884d8" strokeWidth={2} name="Vita-Score" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="shortTermAverage" stroke="#82ca9d" strokeDasharray="5 5" name="7일 이동평균" />
          <Line type="monotone" dataKey="longTermAverage" stroke="#ffc658" strokeDasharray="3 3" name="30일 이동평균" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default VitaScoreChart;