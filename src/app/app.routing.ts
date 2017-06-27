import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './pages/login/login.page';
import { DocumentPage } from './pages/document/document.page';

import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
    { path: '', component: LoginPage },
    { canActivate: [AuthService], path: 'document', component: DocumentPage },
];

export const RoutingProviders: any[] = [];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);