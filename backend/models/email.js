var nodemailer = require('nodemailer');


function Connection() 
{

    const con  = nodemailer.createTransport({
 service: 'gmail',
 auth: {
        user: 'signalexpert.info@gmail.com',			//email ID
	    pass: 'jain@123'				//Password 
    }
});
    
        this.acquire = function(callback) {
            callback(con);
        };
         


 
}