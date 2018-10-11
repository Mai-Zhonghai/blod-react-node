import * as Koa from 'koa';
import * as ip from 'ip';
import conf from './config';
import './mongodb';
import middleware from './middleware';
import router from './router';

const app = new Koa();
middleware(app);
router(app);

app.listen(conf.port, () => {
    console.log(`server is running at http://${ip.address()}:${conf.port}`);
})