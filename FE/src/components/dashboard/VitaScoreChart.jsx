import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from '../common/Card';

const VitaScoreChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/vitascores')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching vita scores:', error);
      });
  }, []);

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