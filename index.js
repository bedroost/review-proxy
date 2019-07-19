const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;
const path = require('path');
const axios = require('axios');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/rooms/:listingid', express.static(path.join(__dirname)));

// Booking
app.get('/api/:listingid/booking', (req, res) => {
  axios.get(`http://ec2-13-52-61-34.us-west-1.compute.amazonaws.com/api/${req.params.listingid}/booking`)
    .then(result => res.send(result.data))
    .catch(error => console.log(error));
});

// Description
app.get('/listing/desc/:listingID', (req, res) => {
  axios.get(`http://18.221.218.103/listing/desc/${req.params.listingID}`)
  .then(result => res.send(result.data))
  .catch(error => console.log(error));
});

// Amenities
app.get('/listing/amenity/:listingID', (req, res) => {
  axios.get(`http://18.221.218.103/listing/amenity/${req.params.listingID}`)
  .then(result => res.send(result.data))
  .catch(error => console.log(error));
});

// Gallery 
app.get('/api/:listingid/images', (req, res) => {
  axios.get(`http://ec2-54-215-150-88.us-west-1.compute.amazonaws.com/api/${req.params.listingid}/images`)
    .then(result => res.send(result.data))
    .catch(error => console.log(error));
});

// Review
app.get('/api/:listingid/reviews', (req, res) => {
  axios.get(`http://ec2-13-57-195-146.us-west-1.compute.amazonaws.com/api/${req.params.listingid}/reviews`)
    .then(result => res.send(result.data))
    .catch(error => console.log(error));
});

app.listen(port, () => {
  console.log(`review-proxy listening on port ${port}`);
});