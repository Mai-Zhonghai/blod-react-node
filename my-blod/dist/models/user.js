import db from '../mongodb';
let userSchema = new db.Schema({
    username: String,
    pwd: String,
    name: String,
    avatar: String,
    roles: Array,
    createTime: { type: Date, default: Date.now },
    loginTime: Date
});
let user = db.model('user', userSchema);
user.insertMany({
    "name": 'mai',
    "pwd": "e10adc3949ba59abbe56e057f20f883e",
    "username": "admin",
    "roles": [
        "admin"
    ]
});
export default user;
