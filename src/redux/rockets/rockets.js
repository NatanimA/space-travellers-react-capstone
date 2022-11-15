/* eslint-disable max-len */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const GET_ROCKETS = 'spaceTravellers/rockets/getRockets';
const TOGGLE_RESERVED = 'spaceTravellers/rockets/toggleReserved';

const API = 'https://api.spacexdata.com/v3/rockets';

export const fetchRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const data = [];
  const books = await axios.get(API);
  books.data.map((val) => data.push({
    id: val.rocket_id,
    image: val.flickr_images[0],
    name: val.rocket_name,
    description: val.description,
    reserved: false,
  }));
  return data;
});

export const toggleReserved = (id) => (
  {
    type: TOGGLE_RESERVED,
    payload: id,
  }
);

const rocketsReducer = (rockets = [], action) => {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return action.payload;
    case TOGGLE_RESERVED:
      return rockets.map((val) => ((val.id === action.payload) ? { ...val, reserved: !val.reserved } : { ...val }));
    default:
      return rockets;
  }
};

export default rocketsReducer;
