import { Message } from 'amqplib/callback_api';
import { createLog } from '../../utils';
import { BrokerMessageLog } from '../../../src-ms';

export const handleLogs = (message: Message | null) => {
	if (message) {
		const log: BrokerMessageLog = JSON.parse(message.content.toString());

		createLog(log);
	}
};
