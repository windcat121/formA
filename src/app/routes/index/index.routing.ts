import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component';
import { ViewComponent } from './view/view.component';

const appRoutes: Routes = [
    {
        path: '',
        component: StartComponent
    },
    {
        path: 'view',
        component: ViewComponent
    }
];

export const routerModule: ModuleWithProviders = RouterModule.forChild(appRoutes);
