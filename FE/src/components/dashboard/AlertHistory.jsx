import React, { useState, useEffect } from 'react';
import { getAlerts } from '../../api/axios';
import Card from '../common/Card';

const AlertHistory = () => {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const alertData = await getAlerts();
        setAlerts(alertData);
      } catch (error) {
        console.error('Error fetching alerts:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <Card title="CIP 감지 알림 내역">
      <ul>
        {alerts.map((alert) => (
          <li key={alert.id} className="border-b last:border-b-0 py-2 flex justify-between items-center">
            <div>
              <span className="font-semibold">{alert.timestamp}:</span> {alert.message}
            </div>
            <span className="text-red-500 font-bold">심각한 위험</span>
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default AlertHistory;