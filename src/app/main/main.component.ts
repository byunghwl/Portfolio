import { Component, OnInit, HostBinding } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { AnimationTransitionEvent } from "@angular/core";

declare var $: any;


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [routerTransition(),],
  host: { '[@routerTransition]': ''}
})

export class MainComponent  {   
   
  
}
