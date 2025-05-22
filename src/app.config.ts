import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router'; // Import provideRouter

import { routes } from './app.routes'; // Import rute Anda sendiri

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes) // Sediakan rute yang sudah Anda definisikan
  ]
};