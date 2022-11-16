import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';

const Myprofile = () => {
  const rockets = useSelector((state) => state.rockets).filter((val) => val.reserved === true);
  const missions = useSelector((state) => state.missions)
    .filter((mission) => mission.member === true);

  return (
    <section className="section-containers section-rockets profile__container">
      <div>
        <h1>My Missions</h1>
        <ListGroup>
          {
            (missions.length > 0)
              ? missions.map((mission) => (
                <ListGroup.Item key={mission.mission_id}>{mission.mission_name}</ListGroup.Item>
              )) : (
                <Alert variant="danger">
                  <Alert.Heading>Oh sorry! You&apos;ve not joined any missions!</Alert.Heading>
                </Alert>
              )
          }
        </ListGroup>
      </div>
      <div>
        <h1>My Rockets</h1>
        <ListGroup>
          {
            (rockets.length > 0)
              ? rockets.map((rockets) => (
                <ListGroup.Item key={rockets.id}>{rockets.name}</ListGroup.Item>
              )) : (
                <Alert variant="danger">
                  <Alert.Heading>Oh sorry! You&apos;ve not reserved any rocket!</Alert.Heading>
                </Alert>
              )
          }
        </ListGroup>
      </div>
    </section>
  );
};

export default Myprofile;
