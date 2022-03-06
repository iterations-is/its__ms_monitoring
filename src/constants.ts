export const MS_EXPRESS_PORT = process.env.MS_EXPRESS_PORT ?? 3000;

export const BROKER_URL = process.env.BROKER_URL ?? 'amqp://localhost';
export const MONGO_URL = process.env.MONGO_URL ?? 'mongodb://localhost:27017';

export const ITS_MS_AUTH = process.env.ITS_MS_AUTH;
export const ITS_MS_COMMUNICATION = process.env.ITS_MS_COMMUNICATION;
export const ITS_MS_INTERPRETERS = process.env.ITS_MS_INTERPRETERS;
export const ITS_MS_MONITORING = process.env.ITS_MS_MONITORING;
export const ITS_MS_PROJECTS = process.env.ITS_MS_PROJECTS;
export const ITS_MS_USERS = process.env.ITS_MS_USERS;

export const ITS_MS_PATHS = [
	{ name: 'AUTH', baseUrl: ITS_MS_AUTH },
	{ name: 'COMMUNICATION', baseUrl: ITS_MS_COMMUNICATION },
	{ name: 'INTERPRETERS', baseUrl: ITS_MS_INTERPRETERS },
	{ name: 'MONITORING', baseUrl: ITS_MS_MONITORING },
	{ name: 'PROJECTS', baseUrl: ITS_MS_PROJECTS },
	{ name: 'USERS', baseUrl: ITS_MS_USERS },
];
