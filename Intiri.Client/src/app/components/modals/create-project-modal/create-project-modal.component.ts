import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-project-modal',
  templateUrl: './create-project-modal.component.html',
  styleUrls: ['./create-project-modal.component.scss'],
})
export class CreateProjectModalComponent implements OnInit {

  projectName: string = '';

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  isValidProjectName(): boolean {
    return this.projectName.length > 1;
  }

  startProjectCreation() {
    sessionStorage.setItem('draftProjectName', this.projectName);
    this.dismiss();
  }

  dismiss() {
    this.modalController.dismiss({'dismissed': true})
  }

}
