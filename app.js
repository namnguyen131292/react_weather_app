const url = 'http://api.openweathermap.org/data/2.5/weather?&q=london&appid=9137797ff7c5ed98a429f496dffbca58&units=metric';

let request = new XMLHttpRequest();
request.open('GET', url, true);

request.onreadystatechange = function () {
  if (this.readyState === 4) {
    if (this.status >= 200 && this.status < 400) {
      // Success!
      const data = JSON.parse(this.responseText);
      console.log(data);
    } else {
      // Error :(
    }
  }
};

request.send();
request = null;