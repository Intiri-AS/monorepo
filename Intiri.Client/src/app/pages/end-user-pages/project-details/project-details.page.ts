import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { Moodboard } from 'src/app/models/moodboard.model';
import { Project } from 'src/app/models/project.model';
import { MoodboardService } from 'src/app/services/moodboard.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details.page.html',
  styleUrls: ['./project-details.page.scss'],
})

export class ProjectDetailsPage implements OnInit {
  
  currentProject: Project;
  
  constructor(public projectService: ProjectService, public moodboardService: MoodboardService, private router: Router) { }

  ngOnInit() {
    this.projectService.currentProject$.pipe(take(1)).subscribe(project => this.currentProject = project);
  }

  goToMoodboardDetails(moodboard: Moodboard){
    this.moodboardService.setCurrentMoodboard(moodboard);
    this.router.navigateByUrl('/moodboard-details');
  }

  addMoodboardToProject()
  {
    //sessionStorage.clear();
    this.currentProject.room = {};
    this.currentProject.budget = '';
    this.currentProject.roomDetails = {};
    this.currentProject.colorPalettes = [];
    this.currentProject.styleImages = [];
    this.currentProject.projectMoodboards = [];
    this.projectService.setCurrentProject(this.currentProject);
    this.router.navigateByUrl('/new-project');

  }

}
