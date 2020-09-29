import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OptionListComponent } from './option-list/option-list.component';


const routes: Routes = [
  {path:' ',component: OptionListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
