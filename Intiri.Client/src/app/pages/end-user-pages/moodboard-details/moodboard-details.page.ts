import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { MoodboardService } from 'src/app/services/moodboard.service';

@Component({
  selector: 'app-moodboard-details-page',
  templateUrl: './moodboard-details.page.html',
  styleUrls: ['./moodboard-details.page.scss'],
})

export class MoodboardDetailsPage implements OnInit {

  moodboard: any;
  projectId: string;
  loggedUser$ = this.accountService.currentUser$;

  constructor(public moodboardService: MoodboardService, private route: ActivatedRoute, private router: Router, private accountService: AccountService)
  {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.moodboard = data.moodboard;
    })
    this.projectId = this.route.snapshot.paramMap.get('projectId');
  }
  backToProjectDetails() {
    if(this.projectId) {
      this.router.navigateByUrl(this.router.url.split('/moodboard-details')[0]);
    } else {
      history.back();
    }
  }

}
