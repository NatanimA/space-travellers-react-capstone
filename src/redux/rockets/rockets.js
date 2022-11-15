import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_ROCKETS = 'spaceTravellers/rockets/getRockets';

const API = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const books = await axios.get(API);
  return books.data;
});

const rocketsReducer = (rockets = [], action) => {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return action.payload;
    default:
      return rockets;
  }
};

export default rocketsReducer;
