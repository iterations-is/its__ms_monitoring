import amqp from 'amqplib/callback_api';

import { BROKER_CHANNEL_LOGS, BROKER_URL } from '../constants';
import { handleLogs } from './handlers';

export const runBroker = () => {
	try {
		amqp.connect(BROKER_URL, (errorConnection, connection) => {
			if (errorConnection) {
				// TODO: log
				throw errorConnection;
			}

			connection.createChannel((errorChannel, channel) => {
				if (errorChannel) {
					// TODO: log
					throw errorChannel;
				}

				// Crate a queue for the channel
				channel.assertQueue(BROKER_CHANNEL_LOGS, {
					durable: false,
				});

				// TODO: log ready for messages
				console.log(`waiting`);

				// Handlers
				channel.consume(BROKER_CHANNEL_LOGS, handleLogs, { noAck: true });
			});
		});
	} catch (error) {
		// TODO: handle error
		console.log(error);
	}
};
