import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// eslint-disable-next-line @typescript-eslint/typedef
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));
