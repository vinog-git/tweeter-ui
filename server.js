require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const cookieParser = require('cookie-parser');

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());
app.use('/', express.static('./src/client'));
app.use('/bootstrap', express.static('./node_modules/bootstrap/'));
app.use('/jquery', express.static('./node_modules/jquery/'));
app.use('/fa', express.static('./node_modules/font-awesome/'));

const routes = require('./src/server/routes');

app.use('/',routes);

app.listen(process.env.PORT, ()=> console.log(`listening on ${process.env.PORT}...`));