import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { appSecuredRoutes } from './secured.routing';

import LoginComponent from './login.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        appSecuredRoutes
    ],
    declarations: [
        LoginComponent
    ],
    providers: [

    ]
})
export default class SecuredModule {}
