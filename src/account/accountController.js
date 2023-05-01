var accountService = require('./accountService');

var signup = async(req, res) => {
    try 
    {          
        var status = await accountService.signupUser(req.body);
        if (status) {
            res.send({"status": true, "message": "User created successfully!"});
        } else {
            res.send({"status": false, "message": "Error creating user"});
        }
    } 
    catch (error) {
        console.log(error);
    }
}

var login = async(req, res) => {
    try 
    {  
         var authReponse = null;       
        authReponse = await accountService.userAuth(req.body);        
        if (authReponse.status) {
            res.send({"status": true, "message": authReponse.message});
        } else {
            res.send({"status": false, "message": authReponse.message});
        }
    } 
    catch (error) {
        console.log(error);
        res.send({"status": false, "message": error.message});
    }
}

module.exports = { signup, login };