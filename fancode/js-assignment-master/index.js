const express = require('express');
const helper = require("./src/lib/helper");
const config = require('./config/config');
const app = express();
// Parse JSON bodies
app.use(express.json());


const port = config.server.port;

//Register routes
helper
    .fileList('./src/routes')
    .forEach(filePath => require(`./${filePath.toString()}`)(app));

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = {
  app: app
}