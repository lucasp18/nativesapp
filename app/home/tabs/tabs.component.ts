import { Component, OnInit, Inject } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'ns-tabs',
    templateUrl: './tabs.component.html',
    styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  public selectIndex:number;
  constructor(
    @Inject('platform') public platform
  ) {}

  ngOnInit(): void {
  	if(this.platform.isAndroid){
  		this.selectIndex = 2;
  	}else{
  		this.selectIndex = 3;
  	}
  }
}
