var express = require("express");
var imgUpload = require("../src/resource/imageUpload");
var router = express.Router();

router.get('/',function(req,res,next){    
    res.writeHead(302,{
            'Location' : '/image-upload.html'
        });
        res.end();
});
router.post('/img',function(req,res,next){
	imgUpload.createdetails(req,res);
});
module.exports = router;