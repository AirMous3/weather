import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setApi } from '@/store/appReducer/actions';
import { searchByCityName } from '@/store/currentDayReducer/middlewares';

import {
  Button, HeaderContainer, Input, Select,
} from './components';

export const Header = () => {
  const dispatch = useDispatch();
  const city = useSelector((st) => st.currentDay.cityName);

  const [state, setState] = useState(city);

  const submitHandler = () => {
    dispatch(searchByCityName(state));
  };

  const handleCityChange = (e) => setState(e.currentTarget.value);
  return (
    <HeaderContainer>
      <div>
        <Input type="text" value={state} onChange={handleCityChange} />
      </div>
      <div>
        <Select
          defaultValue="openWeather"
          onChange={(e) => dispatch(setApi(e.target.value))}
        >
          <option value="openWeather">OpenWeather</option>
          <option value="stormGlass">StormGlass</option>
        </Select>
      </div>
      <div>
        <Button type="button" onClick={submitHandler}>
          Find
        </Button>
      </div>
    </HeaderContainer>
  );
};
