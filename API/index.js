const express = require('express');
const routes = require('./routes');
require('dotenv/config');

const port = process.env.PORT;
const app = express();

routes(app);


app.listen(port, ()=> console.log("listen on port:" + port));
