const express = require('express');
const router = express.Router();
const path = require('path');

// router.use(
//     (req, res, next)=>{
//         console.log('Router activate');
//     next();

// });

const verifyCookie = require('./verify-cookie');

router.get('/', (req, res) =>{
  console.log(req);
    res.sendFile(path.join(__dirname, '../client/index.html'));
});

router.post('/login', (req, res) => {
     // check if client sent cookie
     
  var cookie = req.cookies.tweeter;
  if (cookie === undefined)
  {
    // no: set a new cookie
    var randomNumber=Math.random().toString();
    randomNumber=randomNumber.substring(2,randomNumber.length);
    res.cookie('tweeter',randomNumber, { maxAge: 900000, httpOnly: true });
    console.log('cookie created successfully');
  }

    data = {"data":"success"};
    res.send(JSON.stringify(data));
});

module.exports = router;