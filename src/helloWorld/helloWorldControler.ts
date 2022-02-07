import * as Logger from 'bunyan';
import {Controler} from '../handler/controlerInterface';
import {HelloWorldService} from './helloWorldService';

export class HelloWorldControler implements Controler {
  private readonly logger: Logger;
  private readonly helloWorldService: HelloWorldService;

  constructor(logger: Logger, helloWorldService: HelloWorldService) {
    this.logger = logger;
    this.helloWorldService = helloWorldService;
  }

  async handler(req: any): Promise<string> {
    this.logger.info('Hello from HelloWorldControler');
    const response = await this.helloWorldService.helloWorld(req);
    return response;
  }
}
