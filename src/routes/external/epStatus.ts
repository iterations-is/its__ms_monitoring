import { Request, Response } from 'express';
import axios from 'axios';

import { ITS_MS_PATHS } from '../../constants';
import { logger } from '../../broker';
import { BrokerMessageLog } from '../../../src-ms';

export const epStatus = async (req: Request, res: Response) => {
	const log: BrokerMessageLog = {
		createdAt: new Date(),
		description: 'Status request',
		ms: 'monitoring',
	};
	logger.send(log);

	try {
		const requests = ITS_MS_PATHS.map(({ name, baseUrl }) =>
			axios
				.get(baseUrl + '/about')
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

		return res.status(200).json({ message: 'Statuses', data: statuses });
	} catch (error) {
		return res.status(500).json({ message: 'internal server error' });
	}
};
