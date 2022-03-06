import { Router } from 'express';

import { epStatus } from './external';

export const externalRouter = Router();

externalRouter.get('/status', epStatus);
