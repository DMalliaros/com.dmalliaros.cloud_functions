import Logger from 'bunyan';
import {Controler} from '../../src/handler/controlerInterface';
import {requestHandler} from '../../src/handler/handler';

describe('helloWorld client test', () => {
  let logger: Logger;
  let controler: Controler;

  beforeEach(() => {
    logger = {
      info: jest.fn(),
    } as unknown as Logger;
    controler = {
      handler: jest.fn(() => 'Hi'),
    } as unknown as Controler;
  });

  it('should log hello world client and return Hello, World', async () => {
    const req = {} as Request;
    await requestHandler(logger, controler, req);

    expect(logger.info).toHaveBeenNthCalledWith(1, 'request', req.body);

    expect(controler.handler).toHaveBeenCalledWith(req);

    expect(logger.info).toHaveBeenNthCalledWith(2, 'response', 'Hi');
  });
});
