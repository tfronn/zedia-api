import cors from 'cors';
import express from 'express';
import { routes } from './routes';

const app = express();
const PORT = 8008

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(PORT, () => {
  console.log(`HTTP server listening on ${PORT}!`)
})