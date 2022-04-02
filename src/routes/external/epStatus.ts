import { Request, Response } from 'express';
import axios from 'axios';
import { BrokerMessageLog } from '@its/ms';
import { ITS_MS_PATHS, MS_NAME } from '../../constants';
import { logger } from '../../broker';

export const epStatus = async (req: Request, res: Response) => {
	logger.send({
		createdAt: new Date(),
		description: 'status request',
		ms: MS_NAME,
	} as BrokerMessageLog);

	try {
		const requests = ITS_MS_PATHS.map(({ name, baseUrl }) =>
			axios
				.get(baseUrl + '/about', { timeout: 2000 })
				.then((response) => ({
					name,
					status: response.status,
					data: response.data,
				}))
				.catch((error) => ({
					name,
					status: error.response.status,
				}))
		);

		const statuses = await Promise.allSettled(requests);

		return res.status(200).json({ message: 'service statuses', data: statuses });
	} catch (error) {
		logger.send({
			createdAt: new Date(),
			description: 'status request failed',
			ms: MS_NAME,
		} as BrokerMessageLog);

		return res.status(500).json({ message: 'internal server error' });
	}
};
