import Logger from 'bunyan';
import {HelloWorldControler} from '../../src/helloWorld/helloWorldControler';
import {HelloWorldService} from '../../src/helloWorld/helloWorldService';

describe('helloWorld Controler test', () => {
  let logger: Logger;
  let helloWorldService: HelloWorldService;
  let helloWorldControler: HelloWorldControler;

  beforeEach(() => {
    logger = {
      info: jest.fn(),
    } as unknown as Logger;
    helloWorldService = {
      helloWorld: jest.fn(() => Promise.resolve('Hello, World!')),
    } as unknown as HelloWorldService;
    helloWorldControler = new HelloWorldControler(logger, helloWorldService);
  });

  it('should log hello world controler and return Hello, World', async () => {
    const req = {};
    const response = await helloWorldControler.handler(req);

    expect(response).toStrictEqual('Hello, World!');
    expect(helloWorldService.helloWorld).toHaveBeenCalledWith(req);
    expect(logger.info).toHaveBeenCalledWith('Hello from HelloWorldControler');
  });
});
