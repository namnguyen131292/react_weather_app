import React, { Component } from 'react';


const WeatherMessage = ({ temp, location }) => (
  <div>
    <h3>It&#8216;s {temp}&#176;C in {location}</h3>
  </div>
);

WeatherMessage.propTypes = {
  temp: React.PropTypes.number,
  location: React.PropTypes.string,
};

export default WeatherMessage;
