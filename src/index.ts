import type {HttpFunction} from '@google-cloud/functions-framework/build/src/functions';
import {getLoggerConfig} from './config';

import {LoggerFactory} from './loggerFactory';
import {HelloWorldControler} from './helloWorld/helloWorldControler';
import {HelloWorldClient} from './helloWorld/helloWorldClient';
import {HelloWorldService} from './helloWorld/helloWorldService';
import {requestHandler} from './handler/handler';

const loggerConfig = getLoggerConfig();
const loggerFactory = new LoggerFactory(loggerConfig);

const helloWorldClient = new HelloWorldClient(
  loggerFactory.getNamedLogger('clinet')
);
const helloWorldService = new HelloWorldService(
  loggerFactory.getNamedLogger('service'),
  helloWorldClient
);
const hlloWorld = new HelloWorldControler(
  loggerFactory.getNamedLogger('controler'),
  helloWorldService
);

export const index: HttpFunction = (req, res) => {
  requestHandler(loggerFactory.getNamedLogger('handler'), hlloWorld, req).then(
    response => {
      res.send(response);
    }
  );
};
