import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';

const Myprofile = () => {
  const rockets = useSelector((state) => state.rockets).filter((val) => val.reserved === true);

  return (
    <section className="section-containers section-rockets profile__container">
      <div>
        <h1>My Missions</h1>
        <ListGroup>
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Morbi leo risus</ListGroup.Item>
          <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <h1>My Rockets</h1>
        <ListGroup>
          {
            (rockets.length > 1)
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
