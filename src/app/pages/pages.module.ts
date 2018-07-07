import { NgModule } from '@angular/core';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MultiselectDropdownModule } from 'angular-2-dropdown-multiselect';
import { PipesModule } from '../theme/pipes/pipes.module';
import { routing } from './pages.routing';
import { PagesComponent } from './pages.component';

import { HeaderComponent } from '../theme/components/header/header.component';
import { FooterComponent } from '../theme/components/footer/footer.component';
import { SidebarComponent } from '../theme/components/sidebar/sidebar.component';
import { VerticalMenuComponent } from '../theme/components/menu/vertical-menu/vertical-menu.component';











import { HorizontalMenuComponent } from '../theme/components/menu/horizontal-menu/horizontal-menu.component';
import { BreadcrumbComponent } from '../theme/components/breadcrumb/breadcrumb.component';
import { BackTopComponent } from '../theme/components/back-top/back-top.component';
import { FullScreenComponent } from '../theme/components/fullscreen/fullscreen.component';
import { ApplicationsComponent } from '../theme/components/applications/applications.component';
import { MessagesComponent } from '../theme/components/messages/messages.component';
import { UserMenuComponent } from '../theme/components/user-menu/user-menu.component';
import { FlagsMenuComponent } from '../theme/components/flags-menu/flags-menu.component';
import { SideChatComponent } from '../theme/components/side-chat/side-chat.component';
import { FavoritesComponent } from '../theme/components/favorites/favorites.component';
import { SearchComponent } from './search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DirectivesModule } from '../theme/directives/directives.module';
import { RouterModule } from '@angular/router';
import { routes, LoginModule } from './login/login.module';
import { CreateService } from '../services/create.service';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { SchoolService } from '../services/school.service';
import { HttpModule } from '@angular/http';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import { UserComponent } from './user/user.component';
import { SchoolsModule } from './schools/schools.module';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PerfectScrollbarModule,
    NgbModule.forRoot(),
    MultiselectDropdownModule,
    PipesModule,
    routing, HttpClientModule, Ng2SmartTableModule, NgxDatatableModule,
    DirectivesModule, SchoolsModule,
    RouterModule.forChild(routes), LoginModule, HttpModule, ToastModule.forRoot()

  ],





  declarations: [
    PagesComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    VerticalMenuComponent,
    HorizontalMenuComponent,
    BreadcrumbComponent,
    BackTopComponent,
    FullScreenComponent,
    ApplicationsComponent,
    MessagesComponent,
    UserMenuComponent,
    FlagsMenuComponent,
    SideChatComponent,
    FavoritesComponent,
    UserComponent,
    SearchComponent,
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }, AuthService, UserService, SchoolService, CreateService,
  ]
})
export class PagesModule { }
