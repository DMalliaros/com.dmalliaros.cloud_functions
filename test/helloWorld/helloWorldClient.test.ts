import Logger from 'bunyan';
import {HelloWorldClient} from '../../src/helloWorld/helloWorldClient';

describe('helloWorld client test', () => {
  let logger: Logger;
  let helloWorldClient: HelloWorldClient;

  beforeEach(() => {
    logger = {
      info: jest.fn(),
    } as unknown as Logger;
    helloWorldClient = new HelloWorldClient(logger);
  });

  it('should log hello world client and return Hello, World', async () => {
    const response = await helloWorldClient.helloWorld();

    expect(response).toStrictEqual('Hello, World!');
    expect(logger.info).toHaveBeenCalledWith('Hello from HelloWorldClient');
  });
});
