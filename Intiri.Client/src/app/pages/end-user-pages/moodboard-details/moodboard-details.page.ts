import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AccountService } from 'src/app/services/account.service';
import { CraftsmanService } from 'src/app/services/craftsman.service';
import { MoodboardService } from 'src/app/services/moodboard.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-moodboard-details-page',
  templateUrl: './moodboard-details.page.html',
  styleUrls: ['./moodboard-details.page.scss'],
})
export class MoodboardDetailsPage implements OnInit {
  moodboard: any;
  projectId: string;
  loggedUser$ = this.accountService.currentUser$;

  constructor(
    public moodboardService: MoodboardService,
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService,
    private craftsmanService: CraftsmanService,
    private translate: TranslateService
  ) {}

  ngOnInit() {
    this.route.data.subscribe((data) => {
      this.moodboard = data.moodboard;
    });
    this.projectId = this.route.snapshot.paramMap.get('projectId');
  }

  backToProjectDetails() {
    if (this.projectId) {
      this.router.navigateByUrl(this.router.url.split('/moodboard-details')[0]);
    } else {
      history.back();
    }
  }

  getCraftsmanPage() {
    const roomIndex = this.moodboard.room.name.toLowerCase().replace(/ /g, '');
    return this.craftsmanService.getCraftsmanUrl(roomIndex);
  }

  downloadMoodboardPDF() {
    const getMoodboardPDFUrl: string =
      environment.apiUrl +
      'Moodboards/CreateMoodboardPDF?moodboardId=' +
      this.moodboard.id +
      '&lng=' +
      this.translate.currentLang;
    window.open(getMoodboardPDFUrl, '_blank');
  }
}
