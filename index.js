const express = require('express')
const cors = require('cors')
const app = express();
const port = 4000;
const request = require('request');
app.use(cors())
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
    mode: 'xml, html'
  },
  headers: {
    'x-rapidapi-key': '40c7f45d27msh80a72642169a525p17b314jsnece66bd10861',
    'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
    useQueryString: true
  }
};



app.get('/', (req, res) => {
  res.send('Hi hassona!')
});
app.get('/home',(req,res)=>{
   res.send('Home');
});
app.get('/home/whether',(req,res)=>{
  let lat= req.query.lat;
  let lon=req.query.lng;
  options.qs.lat=lat;
  options.qs.lon=lon;
  
  request(options, function (error, response, body) {
    if (error) { throw new Error(error)}
     
   res.send(JSON.stringify(body));
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});