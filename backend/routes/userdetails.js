const express = require("express");

const Post = require("../models/userdetail");
const router = express.Router();
var otpgenerate =  require('otp-generator')
var nodemailer = require('nodemailer');
const bodyParser = require("body-parser");
var braintree = require('braintree');
var Services = require("../models/services")
var gateway = braintree.connect({
  accessToken: 'access_token$production$jfryxgvkyj5tcv92$dc0ea8a1952f2462f8937e99dc32e9af'
});

router.post("/register", (req, res, next) => {

  Post.find({Email:req.body.Email}).then(post => {
    if (post.length) {
      res.status(200).json({ message: "user already exists!" });
    } else {
      if (req.body.devicetype == "ios")
      {
        console.log(JSON.parse(req.body.services))
        req.body.services =  JSON.parse(req.body.services)
      }
       const jsonRest =  {
          Email: req.body.Email,
          Password: req.body.Password,
          Country: req.body.Country,
          PhoneNumber: req.body.PhoneNumber,
          Location: req.body.Location,
          IP: req.body.IP,
          services: req.body.services,
          devicetoken: req.body.devicetoken,
          devicetype: req.body.devicetype,
          issubscribed: req.body.issubscribed,
          amountrecive: req.body.amountrecive
       }
      const post = new Post(jsonRest);
      post.save().then(createdPost => {
        res.status(201).json({
          message: "UserDetail added successfully",
          postId: createdPost._id

        });

      });
    }
  });

});

router.post("/registerupdate", (req, res, next) => {

  if(req.body.isedit == 1)
  {
    let query = {Email:req.body.Email}

    // let services =  req.body["services[]"]
    // delete req.body["services[]"]
    // req.body.services = services

    Post.updateOne(query,{$set: req.body}).then(result => {
      if (result.nModified) {
        res.status(200).json({ message: "Update successful!" });
      }
      else
      {
        res.status(200).json({ message: "fail" });

      }
    });
  }
 else
 {
  Post.updateOne({Email:req.body.Email},{$set: req.body}).then(result => {
    res.status(200).json({ message: "fail" });
  });
}
});

router.put("/:id", (req, res, next) => {
  const post = new Post({
    _id: req.body.id,
    title: req.body.title,
    content: req.body.content
  });
  Post.updateOne({ _id: req.params.id }, post).then(result => {
    res.status(200).json({ message: "Update successful!" });
  });
});

router.get("", (req, res, next) => {
  Post.find().then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});
router.get("/services", (req, res, next) => {
  Services.find().then(documents => {
    res.send(documents.length > 0 ? documents[0] : [])
  });
});

router.get("/pay/client_token", function (req, res) {
  gateway.clientToken.generate({}, function (err, response) {
    res.send({"ct":response.clientToken});
  });


});

router.post("/pay/checkout", function (req, res) {

  var saleRequest = {
    amount: req.body.amount,
    merchantAccountId: "USD",
    paymentMethodNonce: req.body.nonce,
    // orderId: "123490",
    options: {
      submitForSettlement: true,
      paypal: {
        customField: "PayPal custom field",
        description: "Description for PayPal email receipt",
      },
    }
  };
  
  gateway.transaction.sale(saleRequest, function (err, result) {
    if (err) {
      res.send({"error":err});
    } else if (result.success) {
      res.send({"Success":result.success});
    } else {
      res.send({"error":result.message});
    }
  });
  // Use payment method nonce here
});
 router.get("/freeetrail", (req, res, next) => {
 let query = {"issubscribed":0}
  Post.find(query).then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

 router.get("/getsubscribeduser", (req, res, next) => {
  let query = {"issubscribed":1}
Post.find(query).then(documents => {
res.status(200).json({
  message: "Posts fetched successfully!",
  posts: documents
});
});
});

router.get("/sendOTP", (req, res, next) => {
  Post.find({Email:req.query.Email}).then(post => {
    
    if (post.length) {
  var otp = otpgenerate.generate(4, { upperCase: false, specialChars: false, alphabets: false});
  var transporter  = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'signalexpert.info@gmail.com',      //email ID
    pass: 'jain@123'      //Password 
     }
  });


  const mailOptions = {
  from: 'Verify your Signal Expert Account.', // sender address
  to: req.query.Email, // list of receivers
  subject: 'Verify your Signal Expert Account', // Subject line
  html: `<p>Hi,<br />To verify your account please use the following OTP code in the app:</p>
  <h2><strong>` + otp + `</strong></h2>
<p>Please visit our customer care if you have any trouble initiating your account.</p>
  <p><a href="http://signalexpert.in/out-team">http://signalexpert.in/out-team</a></p>
  <p>Thanks<br />Signal Expert Team</p>`
  };
  transporter.sendMail(mailOptions, function (err, info) {
  if(err)
  {
    console.log(err)
  }
  else
  {
  res.status(202).json({ message: "success", OTP:otp});
  }
  });
    } else {
      res.status(202).json({ message: "Email id is not register" });
    }
  });
});

router.get("/sendRegisterOTP", (req, res, next) => {
  Post.find({Email:req.query.Email}).then(post => {
    
    if (post.length) 
    {
      res.status(202).json({ message: "User already exists!" });
    } else {
      var otp = otpgenerate.generate(4, { upperCase: false, specialChars: false, alphabets: false});
  var transporter  = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'signalexpert.info@gmail.com',      //email ID
    pass: 'jain@123'      //Password 
     }
  });


  const mailOptions = {
  from: 'Verify your Signal Expert Account.', // sender address
  to: req.query.Email, // list of receivers
  subject: 'Verify your Signal Expert Account', // Subject line
  html: `<p>Hi,<br />To verify your account please use the following OTP code in the app:</p>
  <h2><strong>` + otp + `</strong></h2>
<p>Please visit our customer care if you have any trouble initiating your account.</p>
  <p><a href="http://signalexpert.in/out-team">http://signalexpert.in/out-team</a></p>
  <p>Thanks<br />Signal Expert Team</p>`
  };
  transporter.sendMail(mailOptions, function (err, info) {
  if(err)
  {
    console.log(err)
  }
  else
  {
  res.status(202).json({ message: "success", OTP:otp});
  }
  });
    }
  });
});

router.post("/changepassword", (req, res, next) => {
        Post.updateOne({Email:req.body.Email},{$set: {Password:req.body.Password}}).then(post => {
          if (post.nModified) {
            res.status(202).json({ message: "success"});

          } else
          {
            res.status(202).json({ message: "try different password"});

          }
        });
  });
 router.get("/:id", (req, res, next) => {
  Post.findById(req.params.id).then(post => {
    if (post) {
      res.status(200).json(post);
    } else {
      res.status(404).json({ message: "Post not found!" });
    }
  });
});
router.post("/aproovetrial", (req, res, next) => {
let strings = req.body.Email
var array = strings.split(',');
  // {Email: {$in: ['serg.737@icloud.com', 'raviagrawal26@gmail.com']}}
    Post.updateMany({Email: {$in: array}},{$set: {"isfreetrailaproove":1,"startdate":req.body.startdate,"enddate":req.body.endate}}).then(post => {
      if (post.nModified) {
        res.status(200).json({
          message: "Posts fetched successfully!",
          posts: post
        });
      } else {
        res.status(404).json({ message: "User not found!" });
      }
    });
    
  });
 router.post("/intialSusbscription", (req, res, next) => {
    console.log(req.body.Email)
      Post.updateOne({Email:req.body.Email},{$set: {"fromdate":req.body.fromdate,"enddate":req.body.enddate,"startdate":req.body.startdate,
      "amountrecive":req.body.amountrecive,
      "totalamount":req.body.totalamount,
    "issubscribed":true}}).then(post => {
        if (post.nModified) {
          res.status(200).json({
            message: "Posts fetched successfully!",
            posts: post
          });
        } else {
          res.status(404).json({ message: "User not found!" });
        }
      });
    });
 router.post("/aproveSusbscription", (req, res, next) => {
      console.log(req.body.Email)
        Post.updateOne({Email:req.body.Email},{$set: {"fromdate":req.body.fromdate,"enddate":req.body.enddate,"startdate":req.body.startdate,
        "amountrecive":req.body.amountrecive,
        "totalamount":req.body.totalamount,
      "issubscribed":true,"isSubscriptionaproove":true}}).then(post => {
          if (post.nModified) {
            res.status(200).json({
              message: "Posts fetched successfully!",
              posts: post
            });
          } else {
            res.status(404).json({ message: "User not found!" });
          }
        });
      });
 router.post("/verifyemail", (req, res, next) => {
  let query = {$and:[{Email:req.body.Email},{Password:req.body.Password}]}
    Post.find(query).then(post => {
      if (post.length>0) {
        var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
        var freeetraildays = 100
        if((post[0].isfreetrailaproove) && (!post[0].isSubscriptionaproove) && (!post[0].issubscribed))
        {
var firstDate =    post[0].enddate
var secondDate =  new Date()
var diffDays =  parseInt((firstDate - secondDate) / (1000 * 60 * 60 * 24)); 
if(diffDays < 0)
{
  freeetraildays = 0
}
else
{
freeetraildays   =   Math.abs(diffDays+1)
}
        }
        else if(post[0].isSubscriptionaproove)
        {

          var firstDate =    post[0].enddate
          var secondDate =  new Date()
          var diffDays =  parseInt((firstDate - secondDate) / (1000 * 60 * 60 * 24)); 
          if(diffDays < 0)
          {
            freeetraildays = 0
          }
          else
          {
            freeetraildays   =   Math.abs(diffDays+1)
          }
        }

      
        res.status(200).json({
          message: "Posts fetched successfully!",
          freeetraildays: freeetraildays,
          posts: post
        });

        Post.updateOne({Email:req.body.Email},{$set: req.body}).then(post => {
          if (post.nModified) {

          } else
          {
          }
        });
      } else {
        res.status(404).json({ message: "User not found!" });
      }
    });
  });
module.exports = router
