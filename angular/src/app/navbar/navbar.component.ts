import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    readonly cdaQuestsUrls = [
        '/components', '/binding', '/directives-1',
        '/directives-2', '/router', '/driven-forms',
        '/reactive-form', '/input', '/output',
        '/user-interactions', '/services-1', '/services-2',
        '/nasa', '/pokedex', '/create-pokemon'
    ];
    readonly cdaWorkshopsUrls = ['/spring-angular-security', '/authentication', '/calculator-workshop'];
    readonly tutorialsUrls = ['/reactive-form-tutorial', '/calculator-tutorial'];

    constructor(public router: Router) { }

    isCdaQuestsUrl() {
        if (this.cdaQuestsUrls.indexOf(this.router.url) !== -1) {
          return true;
        }
        return false;
    }

    isCdaWorkshopsUrl() {
        if (this.cdaWorkshopsUrls.indexOf(this.router.url) !== -1) {
            return true;
        }
        return false;
    }

    isTutorialsUrl() {
        if (this.tutorialsUrls.indexOf(this.router.url) !== -1) {
            return true;
        }
        return false;
    }
}
