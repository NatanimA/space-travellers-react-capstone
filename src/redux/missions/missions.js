import axios from 'axios';

const FETCH_MISSIONS = 'FETCH-MISSIONS';
const TOGGLE_MISSIONS = 'TOGGLE_MISSIONS'
const URL = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const fetchMissions = () => async (dispatch) => {
  const response = await axios.get(URL).then((res) => res).catch((res) => res);
  const missions = [];
  const data = await response.data;
  data.map((mission) => {
    missions.push({
      mission_id: mission.mission_id,
      mission_name: mission.mission_name,
      description: mission.description,
      member: false,
    });
  });

  if (response.status === 200) {
    dispatch({
      type: FETCH_MISSIONS,
      payload: missions,
    });
  }
};

export const toggleMissions = (id) => ({
  type: TOGGLE_MISSIONS,
  id
})

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MISSIONS:
      return action.payload;
    case TOGGLE_MISSIONS:
      return state.map((mission) => (mission.mission_id === action.id) ? mission.member ? 
      {...mission,member:false} : {...mission,member:true} 
      : {...mission})
    default:
      return state;
  }
};

export default missionsReducer;
