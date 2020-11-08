/** @format */

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8080;
const request = require('request');
app.use(cors());
let options = {
  method: 'GET',
  url: 'https://rapidapi.p.rapidapi.com/weather?units=imperial',
  qs: {
    q: '',
    lat: '0',
    lon: '0',
    id: '2172797',
    lang: 'null',
    units: '"metric" or "imperial"',
    mode: 'xml, html',
  },
  headers: {
    'x-rapidapi-key': '40c7f45d27msh80a72642169a525p17b314jsnece66bd10861', // access_token  for third party api weatherrapidapi
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    useQueryString: true,
  },
};

// http://localhost:8080/
app.get('/', (req, res) => {
  res.send('hi there!');
});

// http://localhost:8080/home/
app.get('/home', (req, res) => {
  res.send('Home');
});

// http://localhost:8080/home/weather?lat='latitude'&lon='longitude'   get weather info  by  accessing location ' lat/ latitude and long/longitude '
app.get('/home/weather', (req, res) => {
  options.qs.lat = req.query.lat;
  options.qs.lon = req.query.lon;
  request(options, function (error, response, body) {
    if (error) {
      throw new Error(error);
    }
    // convert  json to string   and send it back to the client
    res.send(JSON.stringify(body));
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
