import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateListComponent } from './candidates/list/candidate-list.component';
import { CandidateGridComponent } from './candidates/grid/candidate-grid.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'grid',
    component: CandidateGridComponent,
  },
  {
    path: 'list',
    component: CandidateListComponent,
  },
  {
    path: ':id/get',
    component: CandidateDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule {

}
