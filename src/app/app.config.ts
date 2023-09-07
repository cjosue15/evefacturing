import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app.routes';
import { MATERIAL_OPTIONS } from './material.config';

console.log(MATERIAL_OPTIONS);

export const appConfig: ApplicationConfig = {
  providers: [
    MATERIAL_OPTIONS,
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(),
  ],
};
