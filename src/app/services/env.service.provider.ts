/* eslint-disable */
import { EnvService } from './env.service';

interface WindowEnv {
  __env?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
}

export const EnvServiceFactory = () => {
  // Create env
  const env = new EnvService();

  // Read environment variables from browser window
  const browserWindow = (window || {}) as WindowEnv;
  const browserWindowEnv = browserWindow.__env || {};

  // Assign environment variables from browser window to env
  // In the current implementation, properties from env.js overwrite defaults from the EnvService.
  // If needed, a deep merge can be performed here to merge properties instead of overwriting them.
  for (const key in browserWindowEnv) {
    if (browserWindowEnv.hasOwnProperty(key)) { // eslint-disable-line no-prototype-builtins
      env[key] = browserWindow.__env[key];
    }
  }

  return env;
};

export const EnvServiceProvider = {
  provide: EnvService,
  useFactory: EnvServiceFactory,
  deps: [],
};
/* eslint-enable */
