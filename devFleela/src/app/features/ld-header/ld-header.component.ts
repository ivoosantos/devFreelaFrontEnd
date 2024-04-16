import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ld-header',
  templateUrl: './ld-header.component.html',
  styleUrls: ['./ld-header.component.scss']
})
export class LdHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.buildHeader();
    // this.checkIfUserIsLogged();
  }
  buildHeader() {
    if(this.checkIfUserIsLogged()){
      // insere nome de usuario no header e role tbm.
    } else {
      // ...
    }
  }
  checkIfUserIsLogged() {
    return localStorage.getItem("userName") && localStorage.getItem("role");
    // if(localStorage.getItem("userName") && localStorage.getItem("role")){
    //   return true;
    // }else{
    //   return false;
    // }
  }

}
