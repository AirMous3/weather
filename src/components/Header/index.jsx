import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Preloader } from '@/components/Preloader';
import { LOADING } from '@/constants/appStatus';
import { setApi } from '@/store/appReducer/actions';
import { searchByCityNameTH } from '@/store/currentDayReducer/middlewares';

import {
  Button, HeaderContainer, Input, Select,
} from './components';

export const Header = () => {
  const dispatch = useDispatch();
  const city = useSelector((st) => st.currentDay.cityName);
  const status = useSelector((st) => st.app.status);

  const [state, setState] = useState(city);

  const submitHandler = useCallback(() => {
    dispatch(searchByCityNameTH(state));
  }, [state]);

  const handleCityChange = useCallback((e) => setState(e.currentTarget.value), []);

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
      {status === LOADING ? <Preloader /> : null}
    </HeaderContainer>
  );
};
