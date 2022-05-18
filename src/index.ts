import express from 'express';
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/api/tasks', require('./routes/task-routes'));

app.get('/', (_res, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
