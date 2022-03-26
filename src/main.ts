import 'dotenv/config';
import express, { json } from 'express';
import cors from 'cors';
import { aboutRouter, runBroker } from '@its/ms';
import { MS_EXPRESS_PORT } from './constants';
import { externalRouter, internalRouter } from './routes';
import { channelConsumers, channelProducers } from './broker';
import { mongoClient } from './utils';

// RMQ
runBroker(channelProducers, channelConsumers);

// Express
const app = express();

app.use(cors());
app.use(json());

app.use('/monitoring-service', aboutRouter);
app.use('/monitoring-service', externalRouter);
app.use('/monitoring-service', internalRouter);

(async () => {
	await mongoClient.connect();

	app.listen(MS_EXPRESS_PORT, () => {
		console.log('http://localhost:' + MS_EXPRESS_PORT);
	});
})();
