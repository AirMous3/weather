import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { HeaderContainer } from '@/components/Header/components';

export const Header = () => {
  const city = useSelector((st) => st.currentDay.cityName);
  const [state, setState] = useState(city);

  const handleCityChange = (e) => setState(e.currentTarget.value);

  return (
    <HeaderContainer>
      <input type="text" value={state} onChange={handleCityChange} />
      <button type="button">Find</button>
    </HeaderContainer>
  );
};
