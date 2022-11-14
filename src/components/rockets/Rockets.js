import React from 'react';

export default class Rockets extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  render() {
    return (
      <section className="section-containers section-rockets">
        <div className="rockets-container">
          <h1>Rockets Page</h1>
        </div>
      </section>
    );
  }
}
