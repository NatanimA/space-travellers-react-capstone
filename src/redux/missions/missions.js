import axios from "axios";
const FETCH_MISSIONS = 'FETCH-MISSIONS';
const URL = 'https://api.spacexdata.com/v3/missions';

const initialState = []

export const fetchMissions = () => async (dispatch) => {
    const response = await axios.get(URL)

    const data = await response.data;

    if(response.status === 200 && data){
        dispatch({
            type: FETCH_MISSIONS,
            payload: data
        })
    }

    
}

const missionsReducer = (state = initialState , action) => {
    switch (action.type) {
        case FETCH_MISSIONS:
            return [...state,action.payload]
        default:
            return state
    }
}

export default missionsReducer