const express = require('express');
const app = express();
const PORT = 8001;
app.use(express.static(__dirname + '/'));
const path = require('path');
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname + './index.html'));
});
app.listen(PORT);
console.log('production build is available at ', PORT);
