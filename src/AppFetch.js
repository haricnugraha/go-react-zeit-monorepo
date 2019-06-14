import React, { useState, useEffect } from 'react';
import App from './App';

export default function AppFetch() {
  const [data, setData] = useState(null);
  const [step, setStep] = useState('initial');

  useEffect(() => {
    const endpoint = '/api/hello-world.go';
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        setData(data.text);
        setStep('loaded');
      })
      .catch(() => setStep('error'));
  }, []);

  return <App step={step} data={data} />;
}
