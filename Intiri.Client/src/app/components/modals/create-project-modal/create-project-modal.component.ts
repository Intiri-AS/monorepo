import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Project } from 'src/app/models/project.model';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-create-project-modal',
  templateUrl: './create-project-modal.component.html',
  styleUrls: ['./create-project-modal.component.scss'],
})
export class CreateProjectModalComponent implements OnInit {

  projectName: string = '';
  project: Project;
  start: boolean;
  final: boolean;
  existing: boolean;

  constructor(private modalController: ModalController, private projectService: ProjectService, private router: Router) { }

  ngOnInit() {}

  isValidProjectName(): boolean {
    return this.projectName.length > 1;
  }

  startProjectCreation() {
    let project = new Project();
    project.name = this.projectName;
    this.projectService.setCurrentProject(project);
    this.dismiss();
  }

  addNewMoodboard() {
    const blankProject = new Project();
    blankProject.projectMoodboards = [...this.project.projectMoodboards];
    blankProject.name = this.project.name;
    blankProject.id = this.project.id;
    this.projectService.setCurrentProject(blankProject);
    this.dismiss();
    location.replace('/new-project'); // in future figure out how to do this with router.navigate (navigate to '/new-project?step=0')
  }

  dismiss() {
    this.modalController.dismiss({'dismissed': true})
  }

}
