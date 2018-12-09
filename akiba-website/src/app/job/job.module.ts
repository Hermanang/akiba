import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { JobListComponent } from './jobs/list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobRoutingModule } from './job.routing';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { JobService } from './job.service';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    JobListComponent,
    // CandidateGridComponent,
    JobDetailsComponent,
    // CandidateDescriptionComponent,
    // CandidateExperincesComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    HttpClientModule
  ],
  providers: [JobService]
})

export class JobModule { }
