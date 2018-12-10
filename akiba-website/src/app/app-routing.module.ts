import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'candidates',
    loadChildren: './candidate/candidate.module#CandidateModule'
  },
  {
    path: 'jobs',
    loadChildren: './job/job.module#JobModule'
  },
  { path: '', redirectTo: '/jobs', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: false
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
