import { Component, OnInit, Input } from '@angular/core';
/*import { Meta, Title } from '@angular/platform-browser';
import { CandidateService } from 'src/app/services/candidate.service';*/

// import { Router } from '@angular/router';

@Component({
  selector: 'app-candidate-description',
  templateUrl: './candidate-description.component.html'/*,
  styleUrls: ['./candidate-details.component.css']*/
})
export class CandidateDescriptionComponent implements OnInit {

  // candidateList: any;
  @Input() candidate: any;
  constructor(/*private candidateService: CandidateService, private meta: Meta, private title: Title*/) {
    /*this.title.setTitle('Angular');
    this.meta.addTag({ name: 'description', content: 'How to use Angular' });
    this.meta.addTag({ name: 'author', content: 'Hermann' });*/
  }

  ngOnInit() {
    /*this.candidateService.getProfileUsers()
      .subscribe(res => {
        this.candidateList = res;
        console.log(this.candidateList);
      }, error => {
        console.log(error);
      });*/
  }

}
