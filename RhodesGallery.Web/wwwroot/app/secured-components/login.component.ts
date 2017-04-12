import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export default class LoginComponent {
    loginForm: FormGroup;
}