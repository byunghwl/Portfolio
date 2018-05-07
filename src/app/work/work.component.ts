import { Component, OnInit, Input } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Pipe, PipeTransform } from '@angular/core';

import { DomSanitizer,SafeUrl } from '@angular/platform-browser';

import { ActivatedRoute, Router ,NavigationEnd } from '@angular/router';
import { WorkInfomation, WorkInfoList } from '../workInfo';
import { WorkInfoService } from '../work-info.service';

@Pipe({ name: 'safe' })

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})

export class WorkComponent implements OnInit, PipeTransform  {

  @Input() workInfo: WorkInfomation;

  constructor(private activateRoute: ActivatedRoute,
		  	  private router: Router,
		  	  private workInfoService: WorkInfoService,
		  	  public sanitizer: DomSanitizer){ 
  	 // override the route reuse strategy
     this.router.routeReuseStrategy.shouldReuseRoute = function(){
        return false;
     }

     this.router.events.subscribe((evt) => {
        if (evt instanceof NavigationEnd) {
           // trick the Router into believing it's last link wasn't previously loaded
           this.router.navigated = false;
           // if you need to scroll back to top, here is the right place
           //window.scrollTo(0, 0);
        }
    });
  }

  getWorkInfo():void{
  	const title = this.activateRoute.snapshot.paramMap.get('id');
  	this.workInfoService.getWorkInfo(title)
  	.subscribe(workInfo => this.workInfo = workInfo);
  }
  
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
  	this.getWorkInfo();
  }

}
