import 'isomorphic-fetch';

import Koa from 'koa';
import router from './router';
import path from 'path';
import http from 'http';
import render from 'koa-ejs';
import compress from 'koa-compress';
import mount from 'koa-mount';
import serve from 'koa-static';

const app = new Koa();
const port = process.env.PORT || 80;

render(app, {
    root: path.join(__dirname, 'views'),
    layout: false,
    viewExt: 'ejs',
    cache: true,
    debug: false
});

app.use(
    compress({
        gzip: {
            flush: require('zlib').constants.Z_SYNC_FLUSH
        },
        deflate: {
            flush: require('zlib').constants.Z_SYNC_FLUSH
        }
    })
);

// Serve static folder
app.use(mount('/static', serve(path.resolve(__dirname, 'static'))));

app.use(router.routes()).use(router.allowedMethods());

const server = http.createServer(app.callback()).listen(port);

server.on('listening', () => {
    console.info(`HTTP Server is listening @ port ${port}`);
    app.emit('running');
});

app.on('stop', () => {
    server.close();
});
