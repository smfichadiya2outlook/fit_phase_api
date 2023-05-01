var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
    first_nm:
    {
         type: String, 
         required: true
    },
    last_nm:
    {
        type: String, 
        required: true
    },
    email:
    {
        type: String, 
        required: true
    },
    passcode:
    {
        type: String, 
        required: true
    }
});
module.exports = mongoose.model('cl_user', userSchema);

