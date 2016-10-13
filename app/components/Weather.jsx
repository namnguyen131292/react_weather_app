import React, { Component } from 'react';

// eslint-disable-next-line
import WeatherForm from 'WeatherForm';

// eslint-disable-next-line
import WeatherMessage from 'WeatherMessage';


// eslint-disable-next-line
import openWeatherMap from 'openWeatherMap';


class Weather extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.state = {
      isLoading: false,
    };
  }
  handleSearch(location) {
    this.setState({
      isLoading: true,
    });

    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location,
        temp,
        isLoading: false,
      });
    }, (error) => {
      this.setState({
        isLoading: false,
      });
      alert(error);
    });
  }
  render() {
    const { isLoading, temp, location } = this.state;
    function renderMessage() {
      if (isLoading) {
        return <h3>Fetching data fromt the Server</h3>;
      }
      return <WeatherMessage temp={temp} location={location} />;
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch} />
        {renderMessage()}
      </div>
    );
  }
}

export default Weather;
