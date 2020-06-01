import './config/env.ts';
import { Application } from 'https://deno.land/x/oak/mod.ts';

import router from './routes/index.ts';
import NotFoundMiddleware from './middleware/not-found.middleware.ts';
import ErrorMiddleware from './middleware/error.middleware.ts';

const app = new Application();

app.use(ErrorMiddleware);
app.use(router.routes());
app.use(router.allowedMethods());
app.use(NotFoundMiddleware);

export default app;
