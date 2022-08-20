import express, {Express} from 'express';

const app: Express = express();

app.use(express.json());

app.get('/', (req, res, next) => {
  res.status(200).json({success: true});
});

app.listen(8000, () => {
  console.log(`[*] Server listening on port ${8000}`);
});