import { Context, isHttpError } from 'https://deno.land/x/oak/mod.ts';

export default async function ErrorMiddleware(
  { response, request }: Context,
  next: () => void,
): Promise<void> {
  try {
    await next();
  } catch (err) {
    if (isHttpError(err)) {
      response.status = err.status;

      const { message, status, stack } = err;

      if (request.accepts('json')) {
        response.body = { message, status, stack };
        response.type = 'json';
      } else {
        response.body = `${status} ${message}\n\n${stack ?? ''}`;
        response.type = 'text/plain';
      }
    } else {
      console.log(err);
      throw err;
    }
  }
}
