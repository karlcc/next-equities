'use client';

import React, { useEffect, useState } from 'react';

const MyPage = () => {
  const [responseJson, setResponseJson] = useState('');

  useEffect(() => {
    const fetchWatchlists = async () => {
      try {
        const response = await fetch(
          'http://54.255.191.34:8080/api/v1/watchlists'
        );
        const data = await response.json();
        setResponseJson(JSON.stringify(data, null, 2));
      } catch (error) {
        console.error('Error fetching watchlists:', error);
      }
    };

    fetchWatchlists();
  }, []);

  return (
    <div>
      <h1>Watchlists JSON</h1>
      <pre>{responseJson}</pre>
    </div>
  );
};

export default MyPage;
