import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotherComponent } from './mother/mother.component'

const routes: Routes = [
  { path: 'Mother', component: MotherComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
