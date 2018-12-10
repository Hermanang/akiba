import pino from 'pino';
import config from '../../config/environment';

const pretty = pino({
  forceColor: true
});
//pretty.pipe(process.stdout); a revoir

const logger = pino({
  name: 'P-API',
  level: config.debug ? 'debug' : 'info',
  safe: true
}, pretty);

export default logger;
