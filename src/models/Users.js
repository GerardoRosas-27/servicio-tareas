const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    }
},{
    timestamps: true
})
const Users = model('User', userSchema);
const modelUsers = {};
modelUsers.find = async () =>{

}
modelUsers.findall = async () =>{

}
modelUsers.insert = async () =>{
    
}
modelUsers.update = async () =>{
    
}
modelUsers.delete = async () =>{
    
}

module.exports = modelUsers;

