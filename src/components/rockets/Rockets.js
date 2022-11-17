import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchRockets, toggleReserved } from '../../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets.length < 1) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);

  return (
    <section className="section-containers section-rockets">
      <div className="rockets-container">
        {rockets.map((rocket) => (
          <div key={rocket.id} className="rocket__item__container">
            <img src={rocket.image} alt="rocket" />
            <div className="rocket__item__details">
              <h2>
                {rocket.name}
              </h2>
              <p>
                {rocket.reserved ? <span className="reserved__tag">Reserved</span> : null }
                {rocket.description}
              </p>
              <button type="button" id={rocket.id} className={rocket.reserved ? 'cancel__reserved' : 'reserved__btn'} onClick={(e) => dispatch(toggleReserved(e.target.id))}>{rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rockets;
