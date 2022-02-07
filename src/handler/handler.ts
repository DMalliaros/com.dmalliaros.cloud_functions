import {Controler} from './controlerInterface';
import Logger from 'bunyan';

export const requestHandler = async (
  logger: Logger,
  controler: Controler,
  req: any
) => {
  logger.info('request', req.body);

  const response = await controler.handler(req);

  logger.info('response', response);
  return response;
};
