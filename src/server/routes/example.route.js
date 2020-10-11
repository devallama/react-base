import { exampleController } from '../controllers';

export default {
    order: 0,
    addRoutes: router => router.get('/', exampleController.default)
};
