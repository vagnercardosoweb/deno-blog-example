import { Router, Context, Status } from 'https://deno.land/x/oak/mod.ts';

const router = new Router();

router.post('/', async (context: Context) => {
  context.response.body = {
    status: Status.OK,
    message: 'Successfully',
  };
});

export default router;
