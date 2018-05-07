import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { MainComponent } from './main/main.component';
import { WorkComponent } from './work/work.component';


const routes: Routes =[
	
	{ path: '', component: MainComponent},
	{ path: 'work/:id', component: WorkComponent},
	
	/*
	{ path: '', redirectTo: '/main', pathMatch: 'full' },
	
	{ path: '**', component: NotFound }
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'detail/:id', component: HeroDetailComponent },
	*/
];

@NgModule({
   	exports:[ RouterModule ],
 	imports:[ RouterModule.forRoot(routes, { useHash:true }) ]  
})
export class AppRoutingModule { }
