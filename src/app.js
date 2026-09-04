import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { config } from './config/index.js';
import deputadoRoutes from './routes/deputado.routes.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.use('/deputados', deputadoRoutes);

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'API Câmara dos Deputados no ar' });
});

app.use((req, res) => {
  res.status(404).json({ error: 'Rota não encontrada' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Erro interno do servidor' });
});

app.listen(config.PORT, () => {
  console.log(`Servidor rodando em http://localhost:${config.PORT}`);
});
