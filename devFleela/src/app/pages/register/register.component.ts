// @ts-nocheck
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { msg } from 'src/app/shared/utils/msg';
import { RegisterService } from './services/register.service';
import { Helpers } from 'src/app/shared/utils/helpers';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private fb: FormBuilder, private resgiterService: RegisterService) { }

  msg = msg;
  helpers = Helpers;

  registerForm: FormGroup = this.fb.group({
    role: ['', [Validators.required]],
    fullName: ['', [Validators.required]],
    birthdate: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  ngOnInit(): void {
  }

  checkIfAnyRoleIsChecked() {
    let list = document.getElementsByName("role");
    let counter = 0;

    for (let radioButton of list) {
        if (radioButton.checked === false) {
            counter++;
        }
    }

    return counter !== list.length;
}

toogleRole(role: 'dev'| 'cliente'){
  this.registerForm.get('role')?.setValue(role);
}

cadastrar() {

  if(this.registerForm.valid){
    let payload = this.registerForm.value;

    this.resgiterService.postUser(payload)
    .subscribe(
      (response) => {
        Swal.fire({
          title: 'Bom Trabalho!',
          text: "Cadastrado com sucesso!",
          icon: 'success',
          confirmButtonText: 'Ok!'
        }).then((result) => {
          if (result.isConfirmed) {
              localStorage.setItem("userName", response.fullName);
              localStorage.setItem("role", response.role === "dev" ? "Desenvolvedor" : "Cliente");
              localStorage.setItem("idClient", response.id);
          }
        })
      },
      (erro) => {
        console.log(erro);
      }
    )
  } else {
    this.registerForm.markAllAsTouched();
  }

    // Enviar para API
    // fetch("https://622cd1e6087e0e041e147214.mockapi.io/api/users", {
    //         method: 'POST',
    //         body: JSON.stringify(payload),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(response => {
    //       localStorage.setItem("userName", response.fullName);
    //       localStorage.setItem("role", response.role === "dev" ? "Desenvolvedor" : "Cliente");
    //       localStorage.setItem("idClient", response.id);

    //       window.location.href = "list.html";  
          // Swal.fire({
          //       title: 'Bom Trabalho!',
          //       text: "Cadastrado com sucesso!",
          //       icon: 'success',
          //       confirmButtonText: 'Ok!'
          //   }).then((result) => {
          //       if (result.isConfirmed) {
          //           localStorage.setItem("userName", response.fullName);
          //           localStorage.setItem("role", response.role === "dev" ? "Desenvolvedor" : "Cliente");
          //           localStorage.setItem("idClient", response.id);

          //           window.location.href = "list.html";
          //       }
          //   })
    //     }).catch(erro => {
    //       Swal.fire(
    //         'Algo de errado...',
    //         ''+erro+'',
    //         'error'
    //       )
    //       return;
    //     })
}

}
