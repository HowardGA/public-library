import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
    // we always must have a default route:
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    //our login route
    {
        path:'login',
        component: LoginComponent
    },
    // Within the layout component are the things that should only be accesible with authentication, thus it has
    // to be included within the children.  if something can be done without authetication, it should be declared at the same level as the login
    {
        path:'',
        component:LayoutComponent,
        children: [
            {
                path: 'landing',
                component: LandingComponent
            }
        ]
    }
];
