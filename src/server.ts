import app from './app.ts';

app.addEventListener('listen', ({ port, hostname }) => {
  console.log(`Server is running http://${hostname}:${port}`);
});

await app.listen({
  port: Number(Deno.env.get('SERVER_PORT') || 3333),
  hostname: Deno.env.get('SERVER_HOST') || '127.0.0.1',
});
