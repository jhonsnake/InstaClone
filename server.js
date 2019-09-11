const express = require('express');
const app = express();
const path = require("path")


app.use(express.static(__dirname + '/dist'));

app.listen(3000, () => {
  console.log('listening on port 3000!');
});