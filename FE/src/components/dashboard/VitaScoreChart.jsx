import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../common/Card';

const VitaScoreChart = () => {
  const data = [
    { name: '월', vitaScore: 80 },
    { name: '화', vitaScore: 85 },
    { name: '수', vitaScore: 78 },
    { name: '목', vitaScore: 90 },
    { name: '금', vitaScore: 88 },
    { name: '토', vitaScore: 92 },
    { name: '일', vitaScore: 95 },
  ];

  return (
    <Card title="Vita-Score 추이">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="vitaScore" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default VitaScoreChart;
