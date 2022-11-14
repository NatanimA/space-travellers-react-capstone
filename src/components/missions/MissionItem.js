import React from 'react';
import Button from 'react-bootstrap/Button';

const MissionItem = (props) => {
  const { missions } = props;
  return (
    <tr>
      <td>{missions.mission_name}</td>
      <td>{missions.description}</td>
      <td><Button variant="secondary" size="sm" className="d-grid gap-2" aria-label="btn-nmember">Not a member</Button></td>
      <td><Button variant="primary" size="sm" aria-label="btn-join">Join Member</Button></td>
    </tr>
  );
};

export default MissionItem;
