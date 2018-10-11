export default () => {
    let render  = (ctx: any) => {
        return (json: any, msg: String) => {
            ctx.set("Content-Type", "application/json");
            ctx.body = JSON.stringify({
                code: 1,
                data: json || {},
                msg: msg || 'success'
            });
        }
    }
    let renderError = (ctx: any) => {
        return (msg: String) => {
            ctx.set("Content-Type", "application/json");
            ctx.body = JSON.stringify({
                code: 0,
                data: {},
                msg: msg.toString()
            });
        }
    }
    return async (ctx: any, next: any) => {
        ctx.send = render(ctx);
        ctx.sendError = renderError(ctx);
        await next();
    }
}