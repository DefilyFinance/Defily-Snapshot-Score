import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import api from './api';
import server from './graphql';

const app = express();
const PORT = process.env.PORT || 3006;

app.use(bodyParser.json({ limit: '8mb' }));
app.use(bodyParser.urlencoded({ limit: '8mb', extended: false }));
app.use(cors({ maxAge: 86400 }));

app.use('/api', api);

server.applyMiddleware({ app });

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
