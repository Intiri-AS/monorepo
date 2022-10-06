import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Moodboard } from 'src/app/models/moodboard.model';
import { MoodboardService } from 'src/app/services/moodboard.service';

@Component({
  selector: 'app-moodboard-details-page',
  templateUrl: './moodboard-details.page.html',
  styleUrls: ['./moodboard-details.page.scss'],
})

export class MoodboardDetailsPage implements OnInit {

  moodboard: Moodboard;

  constructor(public moodboardService: MoodboardService, private route: ActivatedRoute, private router: Router)
  {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.moodboard = data.moodboard;
    })
  }
  backToProjectDetails() {
    this.router.navigateByUrl(this.router.url.split('/moodboard-details')[0]);
  }

}
