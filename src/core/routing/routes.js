import loadable from '@loadable/component';

export default [
    {
        path: '/',
        exact: true,
        component: loadable(() => import('Pages/Homepage'))
    }
];