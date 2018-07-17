import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { CalendarModule } from 'angular-calendar';

import { routing } from './app.routing';
import { AppSettings } from './app.settings';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';

import { HttpClient} from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './auth.guard';
import { JwtInterceptor } from './services/token-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { CreateService } from './services/create.service';
import { LoginModule } from './pages/login/login.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import 'rxjs/Rx';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { AuthService } from './services/auth.service';
import { HttpsRequestInterceptor } from './module/interceptor/http.interceptor';
import { ConfigService } from './services/config.service';
import { LoginserviceService } from './services/loginservice.service';





@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDe_oVpi9eRSN99G4o6TwVjJbFBNr58NxE'
    }),
    CalendarModule.forRoot(),
    routing,  HttpClientModule, HttpModule, ToastrModule.forRoot(), LoginModule,   BrowserModule, ToastModule.forRoot()
  ],
  providers: [ AppSettings, AuthService, AuthGuard, CreateService, ConfigService, LoginserviceService, {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true
  }, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpsRequestInterceptor,
    multi: true
  }, {provide: LocationStrategy, useClass: HashLocationStrategy},
],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
