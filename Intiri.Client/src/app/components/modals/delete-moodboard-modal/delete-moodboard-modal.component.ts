import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoodboardService } from 'src/app/services/moodboard.service';

@Component({
  selector: 'app-delete-moodboard-modal',
  templateUrl: './delete-moodboard-modal.component.html',
  styleUrls: ['./delete-moodboard-modal.component.scss'],
})
export class DeleteMoodboardModalComponent implements OnInit {
  constructor(
    private moodboardService: MoodboardService,
    private modalController: ModalController
  ) {}

  item: {};
  delete;

  ngOnInit() {}

  deleteMoodboard() {
    this.moodboardService.deleteMoodboard(this.item['id']).subscribe((res) => {
      this.moodboardService.getMoodboards();
      this.modalController.dismiss();
      location.reload();
    });
  }

  dismissModal() {
    this.modalController.dismiss();
  }
}
