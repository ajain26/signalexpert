const express = require("express");
var app = express();
var path = require('path');
const Post = require("../models/post");
const objUserDetail = require("../models/userdetail");
const router = express.Router();
const apn = require('apn');
var FCM = require('fcm-node');
var serverKey = 'AAAAYbnoXeY:APA91bE9R8T1_GPESyM8U6dRZSKD0mVE7A71E1YLPFMSxEtaxQg3njATyM_Obfz5NTO3iQSBQoBkl-aT-qdjE4aQjCNqSTDv2RzpT2JXJw7pmdGjBertgd5RIdrNmUBhuaYGIIFbzK3I'; //put your server key here
var fcm = new FCM(serverKey);
let options = {
  token: {
    
      key: path.join(__dirname, 'AuthKey_PW59LC8R37.p8'),
      keyId: "PW59LC8R37",
     teamId: "C6932K24MK"
   },
   production: true

 };

module.exports = function (io,userList) {


router.post("", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    services: req.body.services
  });
  post.save().then(createdPost => {
    res.status(201).json({
      message: "Post added successfully",
      postId: createdPost._id

    });
    sendPushNotificationiOS(req.body.title, req.body.services);
    sendPushNotificationandroid(req.body.title, req.body.services);

    io.emit("messagelist", {"title":req.body.title,"content":"","services":req.body.services});

  });
});




function sendPushNotificationiOS(title, services)
{
  var emailArray = []
  var sorted = []
    for (var i=0; i<userList.length; i++) {
      emailArray.push(userList[i]["nickname"])
      }
      var query =  {$and:[{"Email" : {$nin : emailArray}},{"devicetype":"ios"},{"services.name":{$in:services}}]};
      if (emailArray.length == 0)
      {
        query =  {$and:[{"devicetype":"ios"},{"services.name":{$in:services}}]}
      }
     objUserDetail.find(query).then(documents => {
      var deviceTokenArray = []
      if(documents.length > 0)
      {
        for (var i=0; i<documents.length; i++) {
          if(documents[i]["devicetoken"])
          {
          deviceTokenArray.push(documents[i]["devicetoken"])
          }
          }
        let apnProvider = new apn.Provider(options);
        // Replace deviceToken with your particular token:
       let deviceToken = deviceTokenArray;
      // Prepare the notifications
       let notification = new apn.Notification();
       notification.expiry = Math.floor(Date.now() / 1000) + 24 * 3600; // will expire in 24 hours from now
      //   notification.badge = 2;
       notification.alert = "Tips: " + title;
       notification.payload = {'title': title,'services':services};
      // Replace this with your app bundle ID:
       notification.topic = "com.Mesaging.expert";
      //  notification.topic = "chat.fujitsu.com";
      // Send the actual notification
       apnProvider.send(notification, deviceToken).then( result => {
        // Show the result of the send operation:
       console.log(result)
        apnProvider.shutdown
        });
      }
  });

}


function sendPushNotificationandroid(title, services)
{
  var emailArray = []
  var sorted = []
  for (var i=0; i<userList.length; i++) {
    emailArray.push(userList[i]["nickname"])
    }
    var query =  {$and:[{"Email" : {$nin : emailArray}},{"devicetype":"Android"},{"services.name":{$in:services}}]};

    if (emailArray.length == 0)
    {
      query =  {$and:[{"devicetype":"Android"},{"services.name":{$in:services}}]}
    }
     objUserDetail.find(query).then(documents => {
      var deviceTokenArray = []
      if(documents.length > 0)
      {
        for (var i=0; i<documents.length; i++) {
          if(documents[i]["devicetoken"])
          {
          deviceTokenArray.push(documents[i]["devicetoken"])
          }
        }

         
          var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
            registration_ids: deviceTokenArray, 
            notification: {
                title: 'Tips', 
                body: title
              }
          };
          fcm.send(message, function(err, response){
            if (err) {
            } else {

            }
          });
        
      }
      });
  

}

router.post("/uniquePost", (req, res, next) => {
  console.log(req.body["services[]"]);
  let servicesArray =  req.body["services[]"]
  var sorted = []
  
  if(typeof servicesArray != 'string')
  {
    for(var i = 0 ; i < servicesArray.length ; i++)
    {
      sorted.push({"services.":servicesArray[i]})
    }
  }
  else
  {
    try {  
    let array =  JSON.parse(servicesArray)
    array.forEach(element => {
      sorted.push({"services.":element})  
    });
    //sorted.push({"services.":array})
    } catch (e) {
    sorted.push({"services.":servicesArray})
    }
  }

console.log( Date(req.body.date) )
console.log( sorted )

  let querysor = {$or:sorted};
  let query =  {$and:[{"date" : { $gte : new Date(req.body.date) }},querysor]};
 // let query = {"date" : { $gte : new Date(req.body.date) }}
  Post.find(query).sort('-date').skip(parseInt(req.body.skipnumber)).limit(parseInt(req.body.limit)).then(documents => {
    for (i =0 ; i<documents.length; i++){
        documents[i]["title"] =  documents[i]["title"].replace(/null/g,'');        
    }
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
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
  Post.find().sort('-date').then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
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

router.delete("/:id", (req, res, next) => {
  Post.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json({ message: "Post deleted!" });
  });
});

return router;
};
