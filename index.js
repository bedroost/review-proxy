const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = 3000;
const path = require('path');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use('/rooms/:listingid', express.static(path.join(__dirname)));

// app.get('/bundle', (res, req) => {
//   res.sendFile(path.resolve('./modules/gallery/public/dist/bundle.js'));
// });

app.listen(port, () => {
  console.log(`review-proxy listening on port ${port}`);
});