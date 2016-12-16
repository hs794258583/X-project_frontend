import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ReviewComponent } from './components/review/review.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent 
    },
    {
        path: 'thao-luan',
        component: ReviewComponent 
    },
    {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: '**', 
        redirectTo: '', 
        pathMatch: 'full' 
    }
];
export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);