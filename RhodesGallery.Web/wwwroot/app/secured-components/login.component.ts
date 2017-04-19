import { Component, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export default class LoginComponent {
    loginForm: FormGroup;

    constructor(private builder: FormBuilder) {
        this.loginForm = builder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        })
    }

    onSubmit() {
        let username = this.loginForm.value.username;
        let password = this.loginForm.value.password;

        if (username === 'pitu' && password === 'linda')
        {
            window.alert('Pitu linda');
        }
        else
        {
            window.alert("Wrong password");
        }
    }
}