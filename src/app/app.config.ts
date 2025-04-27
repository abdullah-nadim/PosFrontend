import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withFetch } from '@angular/common/http';
import { NgEventBus } from 'ng-event-bus';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoadingInterceptor } from './Loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), FormsModule,provideClientHydration(), { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true } ,NgEventBus ,provideHttpClient(withFetch())]
};
