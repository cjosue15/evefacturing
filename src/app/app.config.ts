import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { MATERIAL_OPTIONS } from './material.config';

console.log(MATERIAL_OPTIONS);

export const appConfig: ApplicationConfig = {
  providers: [MATERIAL_OPTIONS, provideRouter(routes), provideAnimations()],
};
