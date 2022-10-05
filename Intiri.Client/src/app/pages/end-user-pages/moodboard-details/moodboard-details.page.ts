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

  currentMoodboard: any;

  constructor(public moodboardService: MoodboardService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.moodboardService.currentMoodboard$.pipe(take(1)).subscribe(moodboard => this.currentMoodboard = moodboard);
  }

}
