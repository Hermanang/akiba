import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateDescriptionComponent } from './candidate-details/description/candidate-description.component';
import { CandidateExperincesComponent } from './candidate-details/experiences/candidate-experiences.component';
import { CandidateService } from './candidate.service';
import { HttpClientModule } from '@angular/common/http';
import { CandidateListComponent } from './candidates/list/candidate-list.component';
import { CandidateGridComponent } from './candidates/grid/candidate-grid.component';
import { CandidateRoutingModule } from './candidate.routing';
import { JobListComponent } from '../job/jobs/list/job-list.component';
import { HeaderComponent } from '../layout/header/header.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    CandidateListComponent,
    CandidateGridComponent,
    CandidateDetailsComponent,
    CandidateDescriptionComponent,
    CandidateExperincesComponent,
    JobListComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    HttpClientModule
  ],
  providers: [CandidateService]
})

export class CandidateModule { }
