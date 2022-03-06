import { MongoClient } from 'mongodb';

import { MONGO_URL } from '../constants';
import { BrokerMessageLog } from '../../src-ms';

// CRITICAL: make one connection
const client = new MongoClient(MONGO_URL);

export const createLog = async (log: BrokerMessageLog) => {
	try {
		await client.connect();

		const database = client.db('its');
		const logs = database.collection('logs');

		return await logs.insertOne(log);
	} finally {
		await client.close();
	}
};
