import React from 'react';
import Card from '../common/Card';

const AlertHistory = () => {
  const alerts = [
    { time: '10:30 AM', event: '식사 소리 감지됨' },
    { time: '11:00 AM', event: '대화 소리 감지됨' },
    { time: '12:15 PM', event: '문 소리 감지됨' },
    { time: '12:30 PM', event: '식사 소리 감지됨' },
  ];

  return (
    <Card title="알림 내역">
      <ul>
        {alerts.map((alert, index) => (
          <li key={index} className="border-b last:border-b-0 py-2">
            <span className="font-semibold">{alert.time}:</span> {alert.event}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default AlertHistory;
