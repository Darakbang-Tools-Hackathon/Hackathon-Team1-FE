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

  const alertStyles = {
    '주의': {
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-800',
      borderColor: 'border-yellow-400',
      icon: '⚠️',
    },
    '위험': {
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-800',
      borderColor: 'border-orange-400',
      icon: '🔥',
    },
    '심각': {
      bgColor: 'bg-red-100',
      textColor: 'text-red-800',
      borderColor: 'border-red-400',
      icon: '🚨',
    },
  };

  return (
    <Card title="CIP 감지 알림 내역">
      <div className="space-y-3">
        {alerts.length > 0 ? (
          alerts.map((alert) => {
            const styles = alertStyles[alert.level] || alertStyles['주의'];
            return (
              <div 
                key={alert.id} 
                className={`p-3 rounded-lg border-l-4 ${styles.bgColor} ${styles.borderColor}`}
              >
                <div className="flex items-center">
                  <span className="text-xl mr-3">{styles.icon}</span>
                  <div className="flex-grow">
                    <div className="flex justify-between items-center">
                      <span className={`font-bold ${styles.textColor}`}>{alert.level}</span>
                      <span className="text-xs text-gray-500">{alert.timestamp}</span>
                    </div>
                    <p className={`text-sm ${styles.textColor}`}>{alert.message}</p>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-gray-500 text-center py-4">최근 알림 내역이 없습니다.</p>
        )}
      </div>
    </Card>
  );
};

export default AlertHistory;