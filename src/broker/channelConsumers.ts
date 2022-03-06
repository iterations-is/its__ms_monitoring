import { BROKER_CHANNEL_LOGS, ChannelConsumer } from '../../src-ms';
import { handleLogs } from './handlers';

export const channelConsumers: ChannelConsumer[] = [
	{
		name: BROKER_CHANNEL_LOGS,
		handler: handleLogs,
	},
];
