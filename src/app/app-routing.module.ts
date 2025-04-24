import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationTableComponent } from './components/reclamation-table/reclamation-table.component';

const routes: Routes = [
  { path: 'reclamations', component: ReclamationTableComponent },
  { path: '', redirectTo: '/reclamations', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
