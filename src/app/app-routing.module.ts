import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { GeneralComponent } from './general/general.component';
import { HealthComponent } from './health/health.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {path:'', redirectTo:'general', pathMatch:'full'},
  {path:'business', component:BusinessComponent , pathMatch:'full'},
  {path:'entertainment', component:EntertainmentComponent , pathMatch:'full'},
  {path:'general', component:GeneralComponent , pathMatch:'full'},
  {path:'health', component:HealthComponent , pathMatch:'full'},
  {path:'science', component:ScienceComponent , pathMatch:'full'},
  {path:'sports', component:SportsComponent , pathMatch:'full'},
  {path:'technology', component:TechnologyComponent , pathMatch:'full'},
  {path:'**', component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
