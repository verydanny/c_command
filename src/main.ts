import 'style-loader!./assets/scss/app.scss';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
 
platformBrowserDynamic().bootstrapModule( AppModule );