import axios from 'axios';
import React, { useState } from 'react';

export const useNameGet = (url: string | undefined) => {
  const [name, setName] = useState<string>('');
  const getName = async () => {
    if (url) {
      const res = await axios.get(url);
      setName(res.data.name);
    }
  };

  getName();
  return name;
};
