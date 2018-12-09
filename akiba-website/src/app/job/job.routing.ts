import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JobListComponent } from './jobs/list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  // {
  //   path: 'grid',
  //   component: JobGridComponent,
  // },
  {
    path: 'list',
    component: JobListComponent,
  },
  {
     path: ':id/get',
     component: JobDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule {

}
