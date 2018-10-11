/**
 * 公共Add方法
 * @param model 要操作数据库的模型
 * @param conditions 增加的条件，如{id:xxx}
 */
export const add = (model: any, conditions: any) => {
    return new Promise ((resolve, reject) => {
        model.create(conditions, (err: any, res: any) => {
            if(err) {
                console.error('Error: ' + JSON.stringify(err));
                reject(err);
                return ;
            }
            console.log('save success!');
            resolve(res);
        })
    })
}

/**
 * 公共update方法
 * @param model 要操作数据库的模型
 * @param conditions 增加的条件，如{id:xxx}
 * @param update 更新条件{set{id:xxx}}
 * @param options
 */
export const update = (model: any, conditions: any, update: any, options: any) => {
    return new Promise((resolve, reject) => {
        model.update(conditions, update, options, (err: any, res: any) => {
            if(err) {
                console.error('Error: ' + JSON.stringify(err));
                reject(err);
                return;
            }
            if(res.n != 0) {
                console.log('update sucess!');
            } else {
                console.log('update fial:no this data!');
            }
            resolve(res);
        })
    })
}

/**
 * 公共find方法 废关联查找
 * @param model
 * @param conditions
 * @param field 查找时的限定条件，如顺序，某些字段不查找等
 * @param options
 * @param callback
 */
export const find = (model: any, conditions: any, fields: any, options: any) => {
    var sort = options.sort == undefined ? { _id: -1 } : options.sort;
    delete options.sort;
    
    return new Promise((resolve, reject) => {
        model.find(conditions, fields, options, (err: any, res: any) => {
            if(err) {
                console.log('Error: ' + JSON.stringify(err));
                reject(err);
                return;
            } else {
                if (res.length != 0) {
                    console.log('find success!');
                } else {
                    console.log('find fial:no this data!');
                }
                resolve(res);
            }
        }).sort(sort);
    })
}

/**
 * 公共findOne方法 废关联查找
 * @param model
 * @param conditions
 * @param field 查找时的限定条件，如顺序，某些字段不查找等
 * @param options
 * @param callback
 */
export const findOne = (model: any, conditions: any, fields: any, options: any = {}) => {
    var sort = options.sort == undefined ? { _id: -1 } : options.sort;
    delete options.sort;
    
    return new Promise((resolve, reject) => {
        model.findOne(conditions, fields, options, (err: any, res: any) => {
            if(err) {
                console.log('Error: ' + JSON.stringify(err));
                reject(err);
                return;
            } else {
                if (res.length != 0) {
                    console.log('find success!');
                } else {
                    console.log('find fial:no this data!');
                }
                resolve(res);
            }
        }).sort(sort);
    })
}