import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ServersComponent } from './pages/servers/servers.component';
import { NasComponent } from './pages/nas/nas.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        title: 'home'
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'login'
    },
    {
        path: 'servers',
        component: ServersComponent,
        title: 'servers'
    },
    {
        path: 'nas',
        component: NasComponent,
        title: 'nas'
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];
