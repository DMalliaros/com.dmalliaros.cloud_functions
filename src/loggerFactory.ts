import * as Logger from 'bunyan';

import {LoggerConfig} from './config';
import {LoggingBunyan} from '@google-cloud/logging-bunyan';

export class LoggerFactory {
  protected logger: Logger;

  constructor(configuration: LoggerConfig) {
    const {serviceName, level} = configuration;
    const loggingBunyan = new LoggingBunyan();

    const options: Logger.LoggerOptions = {
      name: serviceName,
      level: level as Logger.LogLevel,
      streams: [
        {
          stream: process.stdout,
          level: 'info',
        },
        loggingBunyan.stream('info'),
      ],
    };

    this.logger = Logger.createLogger(options);
  }

  public getNamedLogger(loggerName: string): Logger {
    return this.logger.child({loggerName});
  }
}
