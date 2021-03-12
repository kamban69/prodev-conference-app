import Router from '@koa/router';
import { router as accountRouter } from './accounts.mjs';
import { router as swaggerRouter } from './swagger.mjs';

export const router = new Router();

router.use(swaggerRouter.routes()).use(swaggerRouter.allowedMethods());
router.use('/api', accountRouter.routes(), accountRouter.allowedMethods());
