import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ServersComponent } from './pages/servers/servers.component';
import { NasComponent } from './pages/nas/nas.component';
import { authGuard } from './guards/auth.guard';
import { SwitchComponent } from './pages/switch/switch.component';
import { FirewallComponent } from './pages/firewall/firewall.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'home',
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'login'
    },
    {
        path: 'servers',
        component: ServersComponent,
        title: 'servers',
        canActivate: [authGuard]
    },
    {
        path: 'nas',
        component: NasComponent,
        title: 'nas',
        canActivate: [authGuard]
    },
    {
        path: 'switch',
        component: SwitchComponent,
        title: 'switch',
        canActivate: [authGuard]
    },
    {
        path: 'firewall',
        component: FirewallComponent,
        title: 'firewall',
        canActivate: [authGuard]
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
