import React from 'react';
import PropTypes from 'prop-types';
import world from '../images/world.png';
import '../styling/world.css';

const World = ({ totalConfirmed }) => (
  <section className="world-section">
    <div className="world">
      <div>
        <img src={world} className="world-img" alt="World Map" />
      </div>
      <aside>
        <h2>World</h2>
        <span>{`${totalConfirmed} cases`}</span>
      </aside>
    </div>
  </section>
);

World.propTypes = {
  totalConfirmed: PropTypes.number,
};

World.defaultProps = {
  totalConfirmed: 0,
};

export default World;
