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
  getCraftsmanPage() {
    const craftsmanPages = {
      default: 'https://prosjekt.luado.no/',
      kitchen: 'https://prosjekt.luado.no/project-types/136/?utm_source=intiri&utm_medium=affiliate&utm_campaign=moodboard',
      bathroom: 'https://prosjekt.luado.no/project-types/137/?utm_source=intiri&utm_medium=affiliate&utm_campaign=moodboard',
      bedroom: 'https://prosjekt.luado.no/project-types/138/?utm_source=intiri&utm_medium=affiliate&utm_campaign=moodboard',
      livingroom: 'https://prosjekt.luado.no/project-types/139/?utm_source=intiri&utm_medium=affiliate&utm_campaign=moodboard',
      diningroom: 'https://prosjekt.luado.no/project-types/139/?utm_source=intiri&utm_medium=affiliate&utm_campaign=moodboard',
      youthroom: 'https://prosjekt.luado.no/projects/?utm_source=intiri&utm_medium=affiliate&utm_campaign=moodboard/',
    }
    const roomIndex = this.moodboard.room.name.toLowerCase().replace(/ /g,'');
    return craftsmanPages[roomIndex] ? craftsmanPages[roomIndex] : craftsmanPages['default'];
  }

}
