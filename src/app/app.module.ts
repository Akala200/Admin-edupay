import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';
import { CalendarModule } from 'angular-calendar';

import { routing } from './app.routing';
import { AppSettings } from './app.settings';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';

import { AuthService } from './services/auth.service';
import { HttpClient} from '@angular/common/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { ToastrModule } from 'ngx-toastr';
import { CreateService } from './services/create.service';
import { LoginModule } from './pages/login/login.module';
import 'rxjs/Rx';




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
    routing,  HttpClientModule, HttpModule, ToastrModule.forRoot(), LoginModule
  ],
  providers: [ AppSettings, AuthService, AuthGuard, CreateService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  } ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
