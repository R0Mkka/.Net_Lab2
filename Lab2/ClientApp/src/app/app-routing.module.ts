import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { FirstTaskComponent } from './first-task/first-task.component';
import { SecondTaskComponent } from "./second-task/second-task.component";


const routes: Routes = [
  { path: '', component: FirstTaskComponent, pathMatch: 'full' },
  { path: 'second-task', component: SecondTaskComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
