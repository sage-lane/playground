// Adapted from https://blog.logrocket.com/how-to-set-up-node-typescript-express/
import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = 5000

type Person = {
  name: string
  age: number 
}

app.get('/', (req: Request<{}, {}, Person>, res: Response) => {
  const person = req.body
  res.send(person);
});

app.get('/job', () => {})

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});