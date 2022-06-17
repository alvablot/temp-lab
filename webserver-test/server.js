
const express = require("express");

const app = express();
const port = 4000;

app.all('/secret', function (req, res, next) {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
