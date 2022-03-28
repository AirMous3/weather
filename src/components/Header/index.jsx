import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import {
  Button, HeaderContainer, Input, Select,
} from './components';

export const Header = () => {
  const city = useSelector((st) => st.currentDay.cityName);
  const [state, setState] = useState(city);

  const handleCityChange = (e) => setState(e.currentTarget.value);

  return (
    <HeaderContainer>
      <div>
        <Input type="text" value={state} onChange={handleCityChange} />
      </div>
      <div>
        <Select defaultValue="openWeather">
          <option value="openWeather">OpenWeather</option>
          <option value="stormGlass">StormGlass</option>
        </Select>
      </div>
      <div>
        <Button type="button">Find</Button>
      </div>
    </HeaderContainer>
  );
};
