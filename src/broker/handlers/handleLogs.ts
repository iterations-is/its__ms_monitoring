import { Message } from 'amqplib/callback_api';

export const handleLogs = (message: Message | null) => {
	if (message) {
		const data = JSON.parse(message.content.toString());
		const { createdAt, description } = data;
		console.log(data);
	}
};
