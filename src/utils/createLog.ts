import { BrokerMessageLog } from '@its/ms';
import { mongoClient } from './mongoClient';

export const createLog = async (log: BrokerMessageLog) => {
	try {
		const database = mongoClient.db('its');
		const logs = database.collection('logs');

		await logs.insertOne(log);
	} catch (error) {
		console.log(error);
	}
};
