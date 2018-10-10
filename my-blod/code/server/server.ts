import * as Koa from 'koa';
import * as ip from 'ip';
import conf from './config';
import './mongodb';

const app = new Koa();

app.listen(conf.port, () => {
    console.log(`server is running at http://${ip.address()}:${conf.port}`);
})