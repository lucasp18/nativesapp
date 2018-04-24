import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';

import { ChatsService, Chat } from '../core';

@Component({
  moduleId: module.id,
  selector: 'ns-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css'],
})
export class ChatComponent implements OnInit {
  public chatIndex: number;
  public chat: Chat;
  public unread: number;

  constructor(
    private route: ActivatedRoute,
    private chatsService: ChatsService,
    private router: RouterExtensions,
    @Inject('platform') public platform,
  ) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.chatIndex = +params['index'];
      this.chat = this.chatsService.chats[this.chatIndex];
    });
    this.route.queryParams.subscribe(params => {
      this.unread = +params['unread'];
    });
  }

  goBack(){
    alert('teste');
    this.router.back();
  }
}
