import React, { Component } from 'react';


class WeatherForm extends Component {
  constructor() {
    super();
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onFormSubmit(e) {
    e.preventDefault();
    const location = this.location.value;

    if (location.length > 0) {
      this.location.value = '';
      this.props.onSearch(location);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input type="text" ref={(c) => { this.location = c; }} />
          <button type="submit">Get Weather</button>
        </form>
      </div>
    );
  }
}

WeatherForm.propTypes = {
  onSearch: React.PropTypes.func,
};

export default WeatherForm;