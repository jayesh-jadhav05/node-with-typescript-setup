import { config } from '../config/config';
import { node_setup } from './constant';

const corsOptions = {
  origin: node_setup[config.NODE_ENV],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

export { corsOptions };
