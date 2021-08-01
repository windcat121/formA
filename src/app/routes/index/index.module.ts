import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routerModule } from './index.routing';
import { StartComponent } from './start/start.component';
import { ViewComponent } from './view/view.component';

@NgModule({
    declarations: [StartComponent, ViewComponent],
    imports: [
        CommonModule,
        routerModule
    ]
})
export class IndexModule { }
