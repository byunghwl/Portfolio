import { Component, OnInit } from '@angular/core';
import { WorkThumbnail, WorkThumbList } from '../workInfo';
import { WorkInfoService } from '../work-info.service';

@Component({
  selector: 'app-workgrid',
  templateUrl: './workgrid.component.html',
  styleUrls: ['./workgrid.component.css']
})

export class WorkgridComponent implements OnInit{
  
  workThumbnails: WorkThumbnail[];

  constructor(private workInfoService: WorkInfoService){}

  getWorkThumbnails(): void{
  	this.workInfoService.getWorkThumbnails()
  	.subscribe(workArray => this.workThumbnails = workArray)
  }

  ngOnInit() 
  {
  	this.getWorkThumbnails();
  }

}
