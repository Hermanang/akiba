import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CandidateService } from '../candidate.service';
// import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styles: [
    `
    .careerfy-employer-dashboard-nav {
      box-shadow: 0px 0px 0px 0px rgba(0,0,0,0.08);
      padding: 0px 0px 0px 0px;
    }
    .careerfy-employer-dashboard-nav ul li a:focus {
      box-shadow: 0px -5px 15px 0px rgba(0,0,0,0.08);
    }
    `
  ]
})
export class CandidateDetailsComponent implements OnInit {

  viewMode = 'tab1';
  candidate: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private candidateService: CandidateService
    ) {
    /*this.title.setTitle('Angular');
    this.meta.addTag({ name: 'description', content: 'How to use Angular' });
    this.meta.addTag({ name: 'author', content: 'Hermann' });*/
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.candidateService.getProfileUser(id)
      .subscribe(res => {
        this.candidate = res;
        console.log(this.candidate);
      }, error => {
        console.log(error);
      });
  }

}
