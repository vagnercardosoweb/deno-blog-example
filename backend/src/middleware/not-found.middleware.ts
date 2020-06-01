import { Context, Status } from 'https://deno.land/x/oak/mod.ts';

export default function NotFoundMiddleware({ response }: Context): void {
  response.headers.set('Content-Type', 'application/json');
  response.status = Status.NotFound;
  response.body = {
    error: {
      status: Status.NotFound,
      message: 'Not found',
    },
  };
}
