import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions } from '../../redux/missions/missions';


const Missions = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchMissions());
  },[])
  const state = useSelector(state => state.missions)
  
    return (
      <section className="section-containers section-rockets">
        <div>
          <h1>Missions Page</h1>
        </div>
      </section>
    );
}

export default Missions;
