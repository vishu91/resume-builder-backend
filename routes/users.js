var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const db = require('../db');
const User = require("./userModel");

const url = "mongodb://localhost:27017/";

//Error Handling 
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

//Response Handling
let response = {
    status: 200,
    data: [],
    message: null
};


//Using mangoose
router.get('/showusers', (req, res, next) => {

    const user = new User({
        firstname: String
    });

    User.find({}, function(err, users) {
        if (err) throw err;
      
        // object of all the users
        console.log(users);
        res.send(users);
    });


})

/* GET users listing.  */
router.get('/getusers', function (req, res, next) {
    db.get().collection('users').find().toArray()
        .then((users) => {
            //console.log('Users', users);
            response.data = users;
            res.send(response);
            //res.send(users);
            //db.close();  //db close has some problem
        });

    // db.get().collection("users").find().toArray(function (err, result) {
    //     if (err) throw err;
    //     response.data = result;
    //     res.send(response.data);
    // });
});


router.post('/insertuser', (req, res, next) => {
    var firstname = req.body.firstname;

    db.get().collection('users').insertOne({
        firstname: firstname
    });
    res.send("user Added");
})

// router.get('/showusers', (req, res, next) => {   
//     MongoClient.connect(url, function (err, db) {
//         if (err) throw err;
//         var dbo = db.db("mean");
//         //dbo.collection("users").findOne({}, function (err, result) {
//         dbo.collection("users").find().toArray(function (err, result) {
//             if (err) throw err;
//             response.data = result;
//             res.send(response.data);
//             db.close();
//         });
//     });
// })

// router.post('/insertuser',(req, res, next)=> {
//     var firstname = req.body.firstname;
//     MongoClient.connect(url, function(err, db) {
//         if (err) throw err;
//         var dbo = db.db("mean");
//         dbo.collection('users').insertOne({
//             firstname: firstname
//         });
//         res.send("user Added");
//         db.close();
//     }); 
// })

module.exports = router;
