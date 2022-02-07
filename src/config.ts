export type LoggerConfig = {
  serviceName: string;
  level: string;
};

export const getLoggerConfig = (): LoggerConfig => ({
  serviceName: 'my-function-name',
  level: 'info',
});
