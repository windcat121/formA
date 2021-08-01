import {Injectable} from '@angular/core';
import {FormControl, AbstractControl, ValidatorFn} from '@angular/forms';

@Injectable({
    providedIn: 'root'
  })
  export class ValidatorService {
    constructor() {
    }

  // 特殊字符
  static specialcode(control: FormControl): { [prop: string]: {} } {
    if (!control.value) {
      return;
    }
    const special = /[&#@]/;
    if (special.test(control.value)) {
      return {specialcode: '&#@'};
    }
  }

  // QQ邮箱
  static email(control: FormControl): { [prop: string]: {} } {
    if (!control.value) {
      return;
    }
    const qqmail = /[\d]{10}@qq.com/;
    if (!qqmail.test(control.value)) {
      return {email: '格式有误'};
    }
  }

}
