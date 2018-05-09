import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkThumbnail, WorkThumbList } from '../workInfo';
import { WorkInfoService } from '../work-info.service';

@Component({
  selector: 'app-workgrid',
  templateUrl: './workgrid.component.html',
  styleUrls: ['./workgrid.component.css']
})

export class WorkgridComponent implements OnInit{
  
  workThumbnails: WorkThumbnail[];

  activateNavMenu: boolean;
  currentWorkPageIndex: number;

  constructor(private workInfoService: WorkInfoService,
  			  private router: Router){}

  getWorkThumbnails(): void{
  	this.workInfoService.getWorkThumbnails()
  	.subscribe(workArray => this.workThumbnails = workArray)
  }


  getPageInfo(url:string): void{
  	this.workInfoService.getFocusedWorkUrlIndex(url).
  	subscribe(idx => this.currentWorkPageIndex = idx);
  }

  OnNavSpanClick(isNext:boolean): void{
  	if(isNext)
  		this.currentWorkPageIndex++;
  	else
  		this.currentWorkPageIndex--;

  	var newPageIdx = Math.min(Math.max(this.currentWorkPageIndex, 0), 
  							  this.workInfoService.maxWorkPageCount - 1);

  	this.workInfoService.getWorkUrlByIndex(newPageIdx).
  	subscribe(pageUrl => {
  		this.router.navigate(['/work/', pageUrl]);
  	})
  }

  ngOnInit() 
  {
  	var hrefLink = window.location.href.split('#/').pop()
  	this.activateNavMenu = ("" != hrefLink);

  	var linkName = hrefLink.split('work/').pop();
  	if(linkName != ""){
  		this.getPageInfo(linkName);	
  	}
  	
  	this.getWorkThumbnails();
  }
}
