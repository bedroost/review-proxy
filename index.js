const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;
const path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/rooms/:listingid', express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`review-proxy listening on port ${port}`);
});