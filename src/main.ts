import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';  // 👈 required for Angular to work
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { App } from './app/app';

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});
