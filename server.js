const express = require('express');
const app = express();
const { validationResult } = require("express-validator");
const bodyParser = require('body-parser');
const db =require('./config/db');
const form = require('./model/form');
// set the view engine to ejs
app.set('view engine', 'ejs');
app.use(bodyParser.json());

// use res.render to load up an ejs view file
db();
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const jsonParser = bodyParser.json()
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));


// index page
app.get('/', function(req, res) {
  res.render('index');
});

app.post('/send',urlencodedParser, async(req, res) => {
    
   
    try {
      
        const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
    
        if (!errors.isEmpty()) {
          res.status(422).json({ errors: errors.array() });
          return;
        }
        
        let obj = {
                house_id:req.body.houseId,
                name:req.body.name,
                mobileNo:req.body.mobileNo,
                address:req.body.address,
                prabhagh_no:req.body.prabhagNO,
                vard_no:req.body.wardNo,
                malmata:req.body.malmata,
                ghar:req.body.ghar,
                sowchlaychePrkar:req.body.sowchlaychePrkar,
                surveyName:req.body.surveyName,
                mobileNo1:req.body.mobileNo1
    
        };
        console.log(obj);
          const newForm = await form.create(obj);
         return res.status(200).json((`<h1>Thanks</h1>`));      
      } catch (error) {
         return res.status(401).json(error);    
      }

      
});

app.listen(8080);
console.log('Server is listening on port 8080');