import * as mongoose from 'mongoose';
import conf from './config';
const DB_URL = `mongodb://${conf.mongodb.address}/${conf.mongodb.db}`;
// mongoose.Promise = global.Promise;
mongoose.connect(DB_URL, { useNewUrlParser: true }, err => {
    if (err) {
        console.log("数据库连接失败");
    }
    else {
        console.log("数据库连接成功");
    }
});
let userSchema = new mongoose.Schema({
    username: String,
    pwd: String,
    name: String,
    avatar: String,
    roles: Array,
    createTime: { type: Date, default: Date.now },
    loginTime: Date
});
let user = mongoose.model('user', userSchema);
user.insertMany({
    "name": 'mai',
    "pwd": "e10adc3949ba59abbe56e057f20f883e",
    "username": "admin",
    "roles": [
        "admin"
    ]
});
export default mongoose;
