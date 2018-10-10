import * as path from 'path';
import * as bodyParser from 'koa-bodyparser';
import * as staticFiles from 'koa-static';
import Auth from './auth';
import Func from './func';

export default (app: any) => {
    //缓存拦截器
    app.use(async (ctx: any, next: any) => {
        if (ctx.url == '/favicon.ico') return

        await next();
        ctx.status = 200;
        ctx.set('Cache-Control', 'must-revalidation');
        if(ctx.fresh) {
            ctx.status = 304;
            return;
        }
    })

    //数据库操作方法封装
    app.use(Func());

    //权限中间
    app.use(Auth());

    //post请求中间件
    app.use(bodyParser());

    //静态文件中间件
    app.use(staticFiles(path.resolve(__dirname, '../../../static')));
    
}