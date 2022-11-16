import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { toggleMissions } from '../../redux/missions/missions';

const MissionItem = ({missions}) => {
  const {
    mission_id, mission_name, description, member,
  } = missions;
  const dispatch = useDispatch();

  return (
    <tr>
      <td>{mission_name}</td>
      <td>{description}</td>
      <td>{member ? <Button variant="primary" disabled>Active Member</Button> : <Button variant="secondary">Not a member</Button>}</td>
      <td>
        {member ? <Button variant="outline-danger" size="lg" id={mission_id} onClick={() => { dispatch(toggleMissions(mission_id)); }}>Leave Mission</Button>
          : <Button variant="outline-dark" size="lg" id={mission_id} onClick={() => { dispatch(toggleMissions(mission_id)); }}>Join Mission</Button>}
      </td>

    </tr>
  );
};

MissionItem.propTypes = {
  missions: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.bool,
    PropTypes.number
  ]).isRequired,
};

export default MissionItem;
