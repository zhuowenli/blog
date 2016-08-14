/*
* @Author: 卓文理
* @Email : 531840344@qq.com
* @Desc  : 主入口
*/
'use strict';

// env
require('dotenv-safe').load();

// koa
const koa = require('koa');
const onerror = require('koa-onerror');
const favicon = require('koa-favicon');
const session = require('koa-session');
const logger = require('./services/logger');
const compose = require('./utils/mw-compose');
const ResponseData = require('./lib/response-data');

// init app, whit proxy
const app = koa();
app.proxy = true;

app.keys = ['rgmcPAPv6SunV7QM'];
app.use(session(app));

const env = process.env;
const subApps = app.subApps = {
    [env.ADMIN_HOST]: compose(require('./admin')),
    [env.API_HOST]: compose(require('./api')),
    [env.WWW_HOST]: compose(require('./www'))
};

app.use(function *(next){
    const key = 'X-Meiya-Reqid';

    let reqId;
    if (this.request.get(key)) {
        reqId = this.request.get(key);
    } else {
        reqId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c === 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
    this.response.set(key, reqId);
    yield next;
});

app.use(function *(next) {
    const subApp = subApps[this.hostname] || subApps[env.WWW_HOST];

    yield subApp.call(this, next);
});

// favicon
// maxAge, 1 month
app.use(favicon(__dirname + '/../favicon.ico', {
    maxAge: 30 * 24 * 60 * 60 * 1000
}));

// 404
app.use(function *(){
    // redirect to onerror
    this.throw(404);
});

// Error handle
onerror(app, {
    accepts: function() {
        return 'json';
    },
    all: function(err) {
        const ret = new ResponseData(err);

        if(app.env === 'development') {
            ret.stack = err.stack.split('\n');
        }

        let statusCode = err.status || err.statusCode || ret.code;

        this.status = statusCode || 500;
        this.body = ret;
    }
});

// Error report
app.on('error', function(err) {
    logger.error('[App error]', err);
});


// start up
const port = process.env.PORT || 3000;

app.listen(port);
console.log('Server listening:', port);

// exports
module.exports = app;

