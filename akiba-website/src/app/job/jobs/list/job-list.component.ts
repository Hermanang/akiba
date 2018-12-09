import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
// import { JobService } from '../../job.service';

// import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {

  candidateList: any;
  candidate_length: Number;

  constructor(private router: Router, /*private jobService: JobService,*/ private meta: Meta, private title: Title) {
    this.title.setTitle('Angular');
    this.meta.addTag({ name: 'description', content: 'How to use Angular' });
    this.meta.addTag({ name: 'author', content: 'Hermann' });
  }

  ngOnInit() {
    // this.jobService.getProfileUsers()
    //   .subscribe(res => {
    //     this.candidateList = res;
    //     this.candidate_length = Object.keys(this.candidateList).length;
    //   }, error => {
    //     console.log(error);
    //   });
  }

  gotoCandidate(candidate/*: Hero*/) {
    const candidateId = candidate ? candidate._id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/candidates', candidateId, 'get']);
  }

}
