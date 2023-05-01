const express = require('express');
const cors = require('cors');
const server = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5587;

server.use(cors({ origin: "http://localhost:4200" }));

var routes = require('./node_config/routeConfig');

const mongoServer = "127.0.0.1:27017";
const mongoDB = "db_fit_phase";
const mongoclient = `mongodb://${mongoServer}/${mongoDB}`;

mongoose.set('strictQuery', false);
mongoose.connect(mongoclient, {useNewUrlParser: true,  useUnifiedTopology: true }, function  checkDb(error){
    if(error) { console.log(error); }
    else { console.log("Mongo Service Start..."); }
});

server.use(express.json());
server.use(routes);

server.listen(PORT, console.log(`App Service Start...
http://localhost:${PORT}`));