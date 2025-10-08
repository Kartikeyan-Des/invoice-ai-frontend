import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { appRoutes } from './app/app.routing.module';
import { provideAnimations } from '@angular/platform-browser/animations';
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
