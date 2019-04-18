const express = require("express");

const Post = require("../models/userdetail");
const router = express.Router();
var otpgenerate =  require('otp-generator')
var nodemailer = require('nodemailer');



router.post("/register", (req, res, next) => {

  Post.find({Email:req.body.Email}).then(post => {
    if (post.length) {
      res.status(200).json({ message: "user already exists!" });
    } else {

      const post = new Post({
        Email: req.body.Email,
        Password: req.body.Password,
        Country: req.body.Country,
        PhoneNumber: req.body.PhoneNumber,
        Location: req.body.Location,
        IP: req.body.IP,
        services: req.body["services[]"],
        devicetoken: req.body.devicetoken,
        devicetype: req.body.devicetype
      });
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
    let query = {$and:[{Email:req.body.Email,isedit:1}]}

    let services =  req.body["services[]"]
    delete req.body["services[]"]
    req.body.services = services

    Post.updateOne(query,{$set: req.body}).then(result => {
      if (result.nModified) {
        res.status(200).json({ message: "Update successful!" });
      }
      else
      {
        const post = new Post({
          Email: req.body.Email,
          Password: req.body.Password,
          Country: req.body.Country,
          PhoneNumber: req.body.PhoneNumber,
          Location: req.body.Location,
          IP: req.body.IP,
          services: req.body["services[]"],
          devicetoken: req.body.devicetoken,
          devicetype: req.body.devicetype,
          isedit: req.body.isedit
        });
        post.save().then(createdPost => {
          res.status(201).json({
            message: "UserDetail added successfully",
            postId: createdPost._id

          });

        });
      }
    });
  }
 else
 {
  Post.updateOne({Email:req.body.Email},{$set: req.body}).then(result => {
    res.status(200).json({ message: "Update successful!" });
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
  console.log(req.body.Email)
    Post.updateOne({Email:req.body.Email},{$set: {"isfreetrailaproove":1}}).then(post => {
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
        res.status(200).json({
          message: "Posts fetched successfully!",
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
