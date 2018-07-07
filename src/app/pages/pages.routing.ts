import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PagesComponent } from './pages.component';
import { SearchComponent } from './search/search.component';
import { AuthGuard } from '../auth.guard';
import { UserComponent } from './user/user.component';


export const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            // tslint:disable-next-line:max-line-length
            { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule', data: { breadcrumb: 'Dashboard' },  canActivateChild: [AuthGuard] },
            // tslint:disable-next-line:max-line-length
            { path: 'schools', loadChildren: 'app/pages/schools/schools.module#SchoolsModule', data: { breadcrumb: 'Schools' },  canActivate: [AuthGuard] },
            { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule', data: { breadcrumb: 'UI' } },
            // tslint:disable-next-line:max-line-length
            { path: 'form-elements', loadChildren: 'app/pages/form-elements/form-elements.module#FormElementsModule', data: { breadcrumb: 'Form Elements' },  canActivate: [AuthGuard] },
            // tslint:disable-next-line:max-line-length
            { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule', data: { breadcrumb: 'Tables' },  canActivate: [AuthGuard] },
            // tslint:disable-next-line:max-line-length
            { path: 'tools', loadChildren: 'app/pages/tools/tools.module#ToolsModule', data: { breadcrumb: 'Tools' },  canActivate: [AuthGuard] },
            // tslint:disable-next-line:max-line-length
            { path: 'calendar', loadChildren: 'app/pages/calendar/app-calendar.module#AppCalendarModule', data: { breadcrumb: 'Calendar' },  canActivate: [AuthGuard] },
            // tslint:disable-next-line:max-line-length
            { path: 'mailbox', loadChildren: 'app/pages/mailbox/mailbox.module#MailboxModule', data: { breadcrumb: 'Mailbox' },  canActivate: [AuthGuard] },
            // tslint:disable-next-line:max-line-length
            { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule', data: { breadcrumb: 'Maps' },  canActivate: [AuthGuard] },
            // tslint:disable-next-line:max-line-length
            { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule', data: { breadcrumb: 'Charts' },  canActivate: [AuthGuard] },
            // tslint:disable-next-line:max-line-length
            { path: 'dynamic-menu', loadChildren: 'app/pages/dynamic-menu/dynamic-menu.module#DynamicMenuModule', data: { breadcrumb: 'Dynamic Menu' }, canActivate: [AuthGuard]  },
            { path: 'user', component: UserComponent, data: { breadcrumb: 'User page' },  canActivate: [AuthGuard] },
            { path: 'search', component: SearchComponent, data: { breadcrumb: 'Search' },  canActivate: [AuthGuard] }
       ]
    }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
