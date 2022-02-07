import * as Logger from 'bunyan';

export class HelloWorldClient {
  private readonly logger: Logger;

  constructor(logger: Logger) {
    this.logger = logger;
  }

  async helloWorld(): Promise<string> {
    this.logger.info('Hello from HelloWorldClient');
    return Promise.resolve('Hello, World!');
  }
}
