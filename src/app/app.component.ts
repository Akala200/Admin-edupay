import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { AppSettings } from './app.settings';
import { Settings } from './app.settings.model';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public settings: Settings;
    constructor(public appSettings: AppSettings, private router: Router, public toastr: ToastsManager, vcr: ViewContainerRef) {
        this.settings = this.appSettings.settings;
        this.toastr.setRootViewContainerRef(vcr);
    }


    /* These following methods used for theme preview, you can remove this methods */

    // ngOnInit() {
    //     var demo = this.getParameterByName('demo');
    //     this.setLayout(demo);
    // }

    // private getParameterByName(name) {
    //     var url = window.location.href;
    //     name = name.replace(/[\[\]]/g, "\\$&");
    //     var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    //         results = regex.exec(url);
    //     if (!results) return null;
    //     if (!results[2]) return '';
    //     return decodeURIComponent(results[2].replace(/\+/g, " "));
    // }

    // private setLayout(demo){
    //      switch (demo) {
    //         case "vertical-default":
    //             this.settings.theme.menu = 'vertical';
    //             this.settings.theme.menuType = 'default';
    //             break;
    //         case "vertical-compact":
    //             this.settings.theme.menu = 'vertical';
    //             this.settings.theme.menuType = 'compact';
    //             break;
    //         case "vertical-mini":
    //             this.settings.theme.menu = 'vertical';
    //             this.settings.theme.menuType = 'mini';
    //             break;
    //         case "horizontal-default":
    //             this.settings.theme.menu = 'horizontal';
    //             this.settings.theme.menuType = 'default';
    //             break;
    //         case "horizontal-compact":
    //             this.settings.theme.menu = 'horizontal';
    //             this.settings.theme.menuType = 'compact';
    //             break;
    //         case "horizontal-mini":
    //             this.settings.theme.menu = 'horizontal';
    //             this.settings.theme.menuType = 'mini';
    //             break;
    //         default:
    //             this.settings.theme.menu = 'vertical';
    //             this.settings.theme.menuType = 'default';
    //     }
    //     this.router.navigate(['/']);
    // }

}
