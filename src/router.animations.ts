import { trigger, group, state, animate, transition, style } from '@angular/animations';

export function routerTransition() {
  return slideToLeft();
}

function slideToRight() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%'}) ),
    state('*', style({position:'fixed', width:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
    ])
  ]);
}

export function slideToLeft() {
  return trigger('routerTransition', [
    
    state('void', style({position:'relative', width:'100%'}) ),
    state('*',    style({position:'relative', width:'100%'}) ),

    transition(':enter', [
      style({ position:'fixed', transform: 'translateX(100%)'}),
      group([
        animate('0.5s ease-in-out', style({ transform: 'translateX(0%)'}))
        ,animate('0.2s', style({ opacity: 1 }))
        //,animate('0.5s 1s', style({ position:'relative'}))
      ])
    ]),
    transition(':leave', [
      style({position:'fixed', transform: 'translateX(0%)'}),
      group([
        animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
        ,animate('0.2s', style({ opacity: 0 }))
        //animate('0.5s 1s', style({ position:'relative'}))
      ])
     
    ])
  ]);
}

function slideToBottom() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
    state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(100%)'}))
    ])
  ]);
}

function slideToTop() {
  return trigger('routerTransition', [
    state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
    state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
    ])
  ]);
}