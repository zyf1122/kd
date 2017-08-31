var express = require('express');
var router = express.Router();

// var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
// var url = 'mongodb://10.198.1.230:27017/stu';
var db = require('../db');

var result = [];
/* GET home page. */
router.get('/', function(req, res) {
  // console.log(req.query.id);       //find()  []  多个的
  db.user.findOne({_id: req.query.id}, function(err, result){ //findOne() {}
    assert.equal(err, null);
    // res.render('change', { title: 'change', result: result });
    console.log(result);
    // var name = result[0].name;
    // var email = result[0].email;
    // var phone = result[0].phone;
    // var message = result[0].message;    //value="<%= name %>"  value="<%= result[0].name %>"  value=<%= result[0].name %>   
    // res.render('change', { title: 'change' ,name: name, email: email, phone: phone, message: message, id: req.query.id});

    res.render('change', { title: 'change' , result: result });   //value="<%= result.name %>"
  })
  // console.log(req.query.name);
  // MongoClient.connect(url, function(err, db){
  //   assert.equal(err, null);
  //   var stuinfos = db.collection('stuinfos').find({"name": req.query.name});
  //   stuinfos.each(function(err, doc){
  //       assert.equal(err, null);
  //       if(doc !== null){
  //           // console.log(doc);
  //           result.push(doc);
  //           // console.log(result);
  //       } else {
  //         // console.log('ok');
  //         var name = result[0].name;
  //         // console.log(result[0].name);
  //         var email = result[0].email;
  //         var subject = result[0].subject;
  //         var message = result[0].message;
  //         res.render('change', { title: 'change' ,name: name, email: email, subject: subject, message: message});
  //         result = [];
  //         db.close();
  //       }
  //   });
  // })
  // res.redirect('/');
});

router.post('/', function(req, res){
  // console.log(req.body.id);
  console.log(req.body);
  // var user = new db.user(req.body);///////////////////
  db.user.updateOne({_id: req.body.id},{$set: req.body }, function(err, result){
    assert.equal(err, null);
    res.redirect('/show');
  })
  // MongoClient.connect(url, function(err, db){
  //   assert.equal(err, null);
  //   db.collection('stuinfos').updateMany(
  //     {"name": req.body.name },
  //     {$set: {"name" : req.body.name , "email" : req.body.email, "subject" : req.body.subject, "message": req.body.message } },
  //     function(err, result){
  //       assert.equal(err, null);
  //       // console.log(result);
  //       db.close();
  //     }
  //   )
  // })

  // res.redirect('/show');
})

module.exports = router;
