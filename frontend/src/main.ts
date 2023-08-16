import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { ExternalComponent } from './external/external.component';
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import {
  RouterModule,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { APP_ROUTES } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(APP_ROUTES),
      BrowserAnimationsModule
    ),
    provideRouter(APP_ROUTES, withComponentInputBinding()),
    // {
    //   provide: AuthService,
    //   useClass: AuthService,
    // },
    // { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    provideHttpClient(withInterceptorsFromDi()),
  ],
});

bootstrapApplication(ExternalComponent);
