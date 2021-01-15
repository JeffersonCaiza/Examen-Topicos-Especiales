import { Component, OnInit } from '@angular/core';
import { AuthService } from "../servicios/auth.service";
import {ChatService, chat} from "../servicios/chat.service";
import { ModalController } from "@ionic/angular";
import { ChatComponent } from "../componentes/chat/chat.component";



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public chatRooms:any[];

  constructor(public authservice:AuthService,public chatservice:ChatService,private modal : ModalController) {}

  Onlogout(){
    this.authservice.logout();
  }

  ngOnInit(){
    this.chatservice.getChatRooms().subscribe( chats => {
    this.chatRooms=chats;
  })
}

openChat(chat){

  this.modal.create({
    component: ChatComponent,
    componentProps : {
      name:chat.name
    }
  }).then( (modal) => modal.present())
}

}
