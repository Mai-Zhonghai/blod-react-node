import * as koaRouter from 'koa-router';
const router = new koaRouter();
import user from '../controller/admin/user';

export default (app: any) => {
    /*------admin------ */
    //用户请求
    router.post('/admin/user/login', user.login);
    router.get('/admin/user/info', user.info);
    router.get('/admin/user/list', user.list);

    app.use(router.routes()).use(router.allowedMethods());
}
