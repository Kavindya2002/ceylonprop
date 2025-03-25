import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
    username: {
        type:String,
        required:true, //protect data base from added other input type.no user can be added to the database without having username.
        unique:true, //no one can have this,the username similar to others.

    },
    email: {
        type:String,
        required:true, 
        unique:true, 

    },
    password: {
        type:String,
        required:true, 
    }

}, {timestamps:true});  //tell mongodb to record two important extra info(time of creation and updation).

const User = mongoose.model('User' , userSchema);

export default User;