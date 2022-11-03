import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import { Moodboard } from 'src/app/models/moodboard.model';
import { Project } from 'src/app/models/project.model';
import { MoodboardService } from 'src/app/services/moodboard.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})

export class ProjectsPage implements OnInit {

  projects: Project[];

  constructor(public projectService: ProjectService, public moodboardService: MoodboardService, private spinner: NgxSpinnerService)
  {}

  ngOnInit() {
    this.spinner.show();
    this.projectService.getAllProjects().subscribe(res => {
      this.projects = res;
      console.log(this.projects)
      this.spinner.hide();
    });
  }

  getMbPiecesNo(moodboard){
    let result = 0;
      result += moodboard.colorPalettes.length + moodboard.materials.length + moodboard.products.length;
    return result;
  }


}
