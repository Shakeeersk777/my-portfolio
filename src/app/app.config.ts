import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { provideAnimations } from '@angular/platform-browser/animations';
import { NGX_LOADER_TYPE } from './core/constants/app-constants';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch()), 
    importProvidersFrom(NgxSpinnerModule.forRoot({ type: NGX_LOADER_TYPE })),
    provideAnimations()
  ],
};
