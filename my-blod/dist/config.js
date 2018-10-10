import * as path from 'path';
const auth = {
    admin_secret: 'admin-token',
    tokenKey: 'Token_Auth',
    whiteList: ['login', 'client_api'],
    blackList: ['admin_api']
};
const log = {
    logLevel: 'debug',
    dir: path.resolve(__dirname, '../../logs'),
    projectName: 'blog',
    ip: '0.0.0.0' // 默认情况下服务器ip地址
};
const port = process.env.NODE_ENV === 'production' ? '80' : '3010';
export default {
    env: process.env.NODE_ENV,
    port,
    auth,
    log,
    mongodb: {
        username: 'mai',
        pwd: 123456,
        address: '127.0.0.1:27017',
        db: 'mydb'
    }
};
