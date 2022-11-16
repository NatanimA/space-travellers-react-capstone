import React from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { toggleMissions } from '../../redux/missions/missions';

const MissionItem = (props) => {
  const { missions } = props;
  const dispatch = useDispatch()
  
  return (
    <tr>
      <td>{missions.mission_name}</td>
      <td>{missions.description}</td>
      <td>{missions.member ? <Button  variant="primary" disabled >Active Member</Button> : <Button variant="secondary">Not a member</Button>}</td>
      <td>{missions.member ? <Button variant="outline-danger" size='lg' id={missions.mission_id} onClick={() => { dispatch(toggleMissions(missions.mission_id))}}>Leave Mission</Button> 
        : <Button variant="outline-dark" size='lg' id={missions.mission_id} onClick={() => { dispatch(toggleMissions(missions.mission_id)) }}>Join Mission</Button>}</td>

    </tr>
  );
};

export default MissionItem;
