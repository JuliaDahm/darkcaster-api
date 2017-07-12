const express = require('express');
const router = express.Router();
const darksky = process.env.DARKSKY || require('../credentials').darksky; //be careful!!!
const baseUrl = `https://api.darksky.net/forecast/${darksky}/`;
const axios = require('axios');

router.get('/weather', (request, response, next) => {
  const url = `${baseUrl}29,-82`;
  axios.get(url)
       .then(weather => {
         response.json(weather.data);
       })
       .catch(err => {
         next(err);  //passes error to next, which knows to look for a 4 parameter error handler
       });
});
router.get('/weather/:lat,:lon', (request, response, next) => {
  const lat = request.params.lat;
  const lon = request.params.lon;
  const url = `${baseUrl}${lat},${lon}`;
  axios.get(url)
        .then(weather => {
          response.json(weather.data);
        })
        .catch(err => {
          next(err);
        });
});
router.get('/weather/location/:location', (request, response, next) => {
  const location = request.params.location;
  const url = `${baseUrl}${location}`;
  axios.get(url)
    .then(weather => {
      response.json(weather.data);
    })
    .catch(err => {
      next(err);
    });
})
module.exports = router;
