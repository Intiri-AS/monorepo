import { Component, OnInit } from '@angular/core';
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
  start;
  final;

  constructor(private modalController: ModalController, private projectService: ProjectService) { }

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

  dismiss() {
    this.modalController.dismiss({'dismissed': true})
  }

}
