import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Moodboard } from 'src/app/models/moodboard.model';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-project-details-page',
  templateUrl: './project-details.page.html',
  styleUrls: ['./project-details.page.scss'],
})

export class ProjectDetailsPage implements OnInit {
  
  currentProject: Project;
  
  constructor(public projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.currentProject =  this.router.getCurrentNavigation().extras.state.data;
  }

  goToMoodboardDetails(moodboard: Moodboard){
    this.router.navigate(['/moodboard-details'], {
      state:{
        data: moodboard
      }
    });
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
