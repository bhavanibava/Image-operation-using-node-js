var ImageUpload = require('../../model/todo');
var fs = require('fs');
var imgPath = './smiley.gif';
var createdetails = function(req,res){
    var imgUpload = new ImageUpload({
        imageData : fs.readFileSync(imgPath),
        content : image/png
    });
    console.log("data from body : ",req.body);
    return imgUpload.save(function(error){
        if(!error){
            console.log('imgUpload created successfully');
            res.json({
                statusCode : 200,
                ImageUpload : imgUpload
            });
        }
        else{
            res.send({
                statusCode : 500,
                error : 'internal error'
            });
        }
    })
}
exports.createdetails = createdetails;