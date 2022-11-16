import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { fetchMissions } from '../../redux/missions/missions';
import MissionItem from './MissionItem';

const MissionsList = () => {
  const state = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if(state.length < 1){
      dispatch(fetchMissions());
    }
  }, [dispatch , state.length]);
  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Missions</th>
          <th>Description</th>
          <th>Status</th>
          <th />
        </tr>
      </thead>
      <tbody>
        {
        state.map((mission) => (<MissionItem key={mission.mission_id} missions={mission} />))
        }
      </tbody>

    </Table>
  );
};

export default MissionsList;
