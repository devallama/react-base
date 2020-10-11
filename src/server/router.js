import routes from './routes';
import Router from '@koa/router';

const router = new Router();

const sortFnc = (a, b) => (a.order < b.order ? 1 : -1);

routes.sort(sortFnc).forEach(route => route.addRoutes(router));

export default router;
