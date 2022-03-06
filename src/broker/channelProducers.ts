import { BROKER_CHANNEL_LOGS, ChannelObservable, ChannelProducer } from '../../src-ms';

export const logger = new ChannelObservable(BROKER_CHANNEL_LOGS);

export const channelProducers: ChannelProducer[] = [
	{
		name: BROKER_CHANNEL_LOGS,
		observable: logger,
	},
];
