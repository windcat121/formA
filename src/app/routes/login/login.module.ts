import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { ValidatorMessageComponent } from '../../common/validator-message/validator-message.component';


import { routerModule } from './login.routing';
import { LoginComponent } from './login/login.component';


@NgModule({
    declarations: [LoginComponent,  ValidatorMessageComponent],
    imports: [
        CommonModule,
        routerModule,
        NgZorroAntdModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class LoginModule { }
