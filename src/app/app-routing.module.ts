import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes =[
	{ path: '', redirectTo: '/', pathMatch: 'full' },
	/*
	{ path: 'heros', component: HerosComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'detail/:id', component: HeroDetailComponent },
	*/
];

@NgModule({
   	exports:[ RouterModule ],
 	imports:[ RouterModule.forRoot(routes) ]  
})
export class AppRoutingModule { }
