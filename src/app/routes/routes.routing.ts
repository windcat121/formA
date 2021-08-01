import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    // 登录页面
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    // 测试页面
    {
        path: 'test',
        loadChildren: './test/test.module#TestModule'
    },
    // 首页面
    {
        path: 'index',
        loadChildren: './index/index.module#IndexModule'
    }
];

export const routerModule: ModuleWithProviders = RouterModule.forChild(
    appRoutes
);
