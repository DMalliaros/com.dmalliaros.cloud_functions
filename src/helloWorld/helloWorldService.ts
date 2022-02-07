import * as Logger from 'bunyan';
import {HelloWorldClient} from './helloWorldClient';

export class HelloWorldService {
  private readonly logger: Logger;
  private readonly helloWorldClient: HelloWorldClient;

  constructor(logger: Logger, helloWorldClient: HelloWorldClient) {
    this.logger = logger;
    this.helloWorldClient = helloWorldClient;
  }

  async helloWorld(req: any): Promise<string> {
    this.logger.info('Hello from HelloWorldService');
    return await this.helloWorldClient.helloWorld();
  }
}
