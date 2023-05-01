var userModel = require('./accountModel');
var key = '123456789trytryrtyr';
var encryptor = require('simple-encryptor')(key);

module.exports.signupUser = (userDetails) => {
    return new Promise(function myFn(resolve, reject){
        var userModelData = new userModel();
        userModelData.first_nm = userDetails.first_nm;
        userModelData.last_nm = userDetails.last_nm;
        userModelData.email = userDetails.email;     
        userModelData.passcode = userDetails.passcode;
        userModelData.save(function resultHandle(error, result){
            if(error)  
            {                
                reject(false);
            }
            else
            {
                console.log(result);
                resolve(true);
            }
        });        
    });
}

module.exports.userAuth = (userDetails) => {
    return new Promise(function myFn(resolve, reject){
        userModel.findOne({email: userDetails.email}, function getresult(errorDetails, result)
        {
            if (errorDetails) {
                reject({status: false, message: "Invalid Data!"});
            } else {
                if (result != undefined && result != null ) {
                    if(userDetails.passcode == result.passcode)
                    {
                        resolve({status: true, message: "User have authorisation!"});
                    }
                    else
                    {
                        reject({status: false, message: "User Authorisation Fail!"});
                    }
                } else {
                    reject({status: false, message: "User Error Details!"});
                }
            }
        });        
    });
}