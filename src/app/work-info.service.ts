import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { WorkThumbnail, WorkThumbList, WorkInfomation, WorkInfoList } from './workInfo';

@Injectable()
export class WorkInfoService {
  
  getWorkThumbnails():Observable<WorkThumbnail[]>{
  	return of(WorkThumbList);
  }

  getWorkInfos():Observable<WorkInfomation[]>{
  	return of(WorkInfoList);
  }

  getWorkInfo(id:string): Observable<WorkInfomation>{
  	return of(WorkInfoList.find(workI => workI.url == id));
  }

  constructor() {}

}
