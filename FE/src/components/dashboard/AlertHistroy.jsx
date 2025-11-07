import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../common/Card';

const AlertHistory = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/sounds')
      .then(response => {
        setAlerts(response.data);
      })
      .catch(error => {
        console.error('Error fetching alerts:', error);
      });
  }, []);

  return (
    <Card title="알림 내역">
      <ul>
        {alerts.map((alert) => (
          <li key={alert.id} className="border-b last:border-b-0 py-2">
            <span className="font-semibold">{alert.time}:</span> {alert.event}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default AlertHistory;