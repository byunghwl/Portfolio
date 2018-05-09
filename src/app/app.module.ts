import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { WorkgridComponent } from './workgrid/workgrid.component';
import { MainComponent } from './main/main.component';
import { WorkComponent } from './work/work.component';
import { SocialComponent } from './social/social.component';


import { WorkInfoService } from './work-info.service';
import { PageService } from './page.service';


// 1. followed this NGB tutorial
// https://medium.com/codingthesmartway-com-blog/using-bootstrap-with-angular-c83c3cee3f4a

//2. page transition
// https://blog.reactiveconf.com/angular-supercharge-your-router-transitions-using-new-animation-features-v4-3-dbc10ac8ee53


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    WorkgridComponent,
    MainComponent,
    WorkComponent,
    SocialComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
  	WorkInfoService,
  	PageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
