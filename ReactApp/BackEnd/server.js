import express from 'express';
import cors from 'cors';
import sql from 'mysql';

const app = express();
app.use(cors());

app.listen(8081 , () => {
 console.log('listening on port ')
})