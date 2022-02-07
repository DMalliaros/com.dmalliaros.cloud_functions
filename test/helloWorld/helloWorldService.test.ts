import Logger from 'bunyan';
import {HelloWorldClient} from '../../src/helloWorld/helloWorldClient';
import {HelloWorldService} from '../../src/helloWorld/helloWorldService';

describe('helloWorld service test', () => {
  let logger: Logger;
  let helloWorldService: HelloWorldService;
  let helloWorldClient: HelloWorldClient;

  beforeEach(() => {
    logger = {
      info: jest.fn(),
    } as unknown as Logger;
    helloWorldClient = {
      helloWorld: jest.fn(() => Promise.resolve('Hello, World!')),
    } as unknown as HelloWorldClient;
    helloWorldService = new HelloWorldService(logger, helloWorldClient);
  });

  it('should log hello world service and return Hello, World', async () => {
    const req = {};
    const response = await helloWorldService.helloWorld(req);

    expect(response).toStrictEqual('Hello, World!');
    expect(helloWorldClient.helloWorld).toBeCalled();
    expect(logger.info).toHaveBeenCalledWith('Hello from HelloWorldService');
  });
});
