import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
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

  project: Project;
  moodboards: Moodboard[];

  constructor(public projectService: ProjectService, private route: ActivatedRoute, public moodboardService: MoodboardService, private router: Router)
  {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    this.route.data.pipe(take(1)).subscribe(data => {
      this.project = data.project;
      this.moodboards = this.project.projectMoodboards;
    })
  }

  getMbPiecesNo(moodboard){
    let result = 0;
      result += moodboard.colorPalettes.length + moodboard.materials.length + moodboard.products.length;
    return result;
  }


  // goToMoodboardDetails(moodboard: Moodboard){
  //   this.moodboardService.setCurrentMoodboard(moodboard);
  //   this.router.navigateByUrl('/moodboard-details');
  // }

  addMoodboardToProject()
  {
    const currentProject = new Project();
    currentProject.id = this.project.id;
    currentProject.name = this.project.name;
    this.projectService.setCurrentProject(currentProject);
    this.router.navigateByUrl('/new-project');

  }

}
