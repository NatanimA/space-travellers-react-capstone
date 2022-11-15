import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchRockets } from '../../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);

  return (
    <section className="section-containers section-rockets">
      <div className="rockets-container">
        {rockets.map((rocket) => (
          <div key={rocket.rocket_id} className="rocket__item__container">
            <img src={rocket.flickr_images[0]} alt="rocket" />
            <div className="rocket__item__details">
              <h2>{rocket.rocket_name}</h2>
              <p>{rocket.description}</p>
              <button type="button" id={rocket.rocket_id}>Reserve Rocket</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rockets;
