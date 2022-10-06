import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
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
  
  project: Project;
  currentProject: Project;
  moodboards$: Observable<any[]>;
  
  constructor(public projectService: ProjectService, private route: ActivatedRoute, public moodboardService: MoodboardService, private router: Router) 
  { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() { 
    this.route.data.subscribe(data => {
      this.project = data.project;
    })

    if(this.project !== undefined){
      this.projectService.setCurrentProject(this.project);
      this.moodboards$ = this.moodboardService.storeMoodboardsFromProject(this.project);
    }else{
      this.loadProject();
    }
    
  }

  loadProject() {
    this.project = JSON.parse(sessionStorage.getItem("project"))
    this.moodboards$ = this.moodboardService.storeMoodboardsFromProject(this.project);
  }

  goToMoodboardDetails(moodboard: Moodboard){
    this.moodboardService.setCurrentMoodboard(moodboard);
    this.router.navigateByUrl('/moodboard-details');
  }

  addMoodboardToProject()
  {
    //this.projectService.currentProject$.pipe(take(1)).subscribe(project => this._currentProject = project);
    this.currentProject = new Project();
    this.currentProject.name = this.project.name;
    this.projectService.setCurrentProject(this.currentProject);
    this.router.navigateByUrl('/new-project');

  }

}
