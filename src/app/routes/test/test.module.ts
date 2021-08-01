import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routerModule } from './test.routing';

import { TestComponent } from './test/test.component';

@NgModule({
    declarations: [TestComponent],
    imports: [
        CommonModule,
        routerModule
    ]
})
export class TestModule { }
