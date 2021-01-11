import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectromenagersComponent } from './electromenagers/electromenagers.component';
import { AddElectromenagersComponent } from './add-electromenagers/add-electromenagers.component';
import { UpdateElectromenagersComponent } from './update-electromenagers/update-electromenagers.component';

const routes: Routes = [
  {path: "electromenagers", component : ElectromenagersComponent},
  {path: "add-electromenagers", component : AddElectromenagersComponent},
  {path: "updateElectromenagers/:id", component: UpdateElectromenagersComponent},
  {path: "", redirectTo: "electromenagers", pathMatch: "full" }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
