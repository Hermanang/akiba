import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

// import { Router } from '@angular/router';

@Component({
  selector: 'app-job-grid',
  templateUrl: './job-grid.component.html',
  styleUrls: ['./job-grid.component.css']
})
export class JobGridComponent implements OnInit {

  candidateList: any;
  candidate_length: Number;

  constructor(private router: Router, /*private candidateService: CandidateService,*/ private meta: Meta, private title: Title) {
    this.title.setTitle('Angular');
    this.meta.addTag({ name: 'description', content: 'How to use Angular' });
    this.meta.addTag({ name: 'author', content: 'Hermann' });
  }

  ngOnInit() {
    // this.candidateService.getProfileUsers()
    //   .subscribe(res => {
    //     this.candidateList = res;
    //     this.candidate_length = Object.keys(this.candidateList).length;
    //   }, error => {
    //     console.log(error);
    //   });
  }

  gotoJob(job/*: Hero*/) {
    // const candidateId = candidate ? candidate._id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    // this.router.navigate(['/candidates', candidateId, 'get']);
  }

}
