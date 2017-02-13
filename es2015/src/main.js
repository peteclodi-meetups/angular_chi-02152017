// ES2105
// Necessary imports to allow for the proper bootstrapping of the ES 2015 version of the App
import 'core-js/client/shim';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'rxjs/Rx';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

// ES2015
import './styles.scss';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);
