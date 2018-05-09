import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { WorlInfoOrder,WorkThumbnail, WorkThumbList, WorkInfomation, WorkInfoList } from './workInfo';

@Injectable()
export class WorkInfoService {
  
  maxWorkPageCount: number;


  getWorkThumbnails():Observable<WorkThumbnail[]>{
  	return of(WorkThumbList);
  }

  getWorkInfos():Observable<WorkInfomation[]>{
  	return of(WorkInfoList);
  }

  getWorkInfo(id:string): Observable<WorkInfomation>{
  	return of(WorkInfoList.find(workI => workI.url == id));
  }

  getFocusedWorkUrlIndex(id:string):Observable<number>
  {
  	return of(WorlInfoOrder.findIndex(workInfoUrl => workInfoUrl == id ));
  }

  getWorkUrlByIndex(idx:number):Observable<string>{
  	return of(WorlInfoOrder[idx]);
  }

  constructor() {
  	this.maxWorkPageCount = WorlInfoOrder.length;

  }

}
