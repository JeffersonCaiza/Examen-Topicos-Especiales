import { Component, OnInit } from '@angular/core';
import {NavParams, ModalController} from "@ionic/angular";
import {message} from "../../modelos/mensajes";
import {ChatService} from "../../servicios/chat.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {

  public chat:any;
  public message:message;
  public messages=[];



  constructor(private navparams:NavParams, private modal:ModalController, private chatService:ChatService) { }

  ngOnInit() {
    //this.chatService.getChatRoom()
    this.chat=this.navparams.get('chat')
  }

  closeChat(){
    this.modal.dismiss()
  }

  sendMessage(){
   
  }

}
