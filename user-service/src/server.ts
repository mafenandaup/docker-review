import app from './app.js';

const port = Number(process.env.PORT) || 8081;

app.listen(port, () => {
  console.log(`user-service listening on :${port}`);
});
