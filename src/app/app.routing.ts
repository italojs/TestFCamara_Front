import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './pages/login/login.page';
import { HomePage } from './pages/home/home.page';


import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
    { path: '', component: LoginPage },
    { canActivate: [AuthService], path: 'home', component: HomePage }
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);