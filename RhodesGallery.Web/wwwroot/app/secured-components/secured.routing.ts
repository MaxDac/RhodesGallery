import { Routes, RouterModule } from '@angular/router';

import LoginComponent from './login.component';

const securedRoutes: Routes = [
    { path: '', component: LoginComponent }
];

export const appSecuredRoutes = RouterModule.forChild(securedRoutes);