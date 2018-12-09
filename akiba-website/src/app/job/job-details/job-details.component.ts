import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { JobService } from '../job.service';
// import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styles: [
    `
    `
  ]
})
export class JobDetailsComponent implements OnInit {

  viewMode = 'tab1';
  // candidate: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jobService: JobService
    ) {
    /*this.title.setTitle('Angular');
    this.meta.addTag({ name: 'description', content: 'How to use Angular' });
    this.meta.addTag({ name: 'author', content: 'Hermann' });*/
  }

  ngOnInit() {
    // const id = this.route.snapshot.paramMap.get('id');
    // this.candidateService.getProfileUser(id)
    //   .subscribe(res => {
    //     this.candidate = res;
    //     console.log(this.candidate);
    //   }, error => {
    //     console.log(error);
    //   });
  }

}
