import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  public  email : string;
  public  name : string;
  public password : string;

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit() {
  }

  OnSubmitRegister(){
    this.auth.register(this.email, this.password,this.name).then( auth => {
      this.router.navigate(['home'])
      console.log(auth)
    }).catch(err => console.log(err))
  }

}
