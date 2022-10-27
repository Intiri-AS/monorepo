import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSlides, ModalController } from '@ionic/angular';
import { OpenFileModalComponent } from 'src/app/components/modals/open-file-modal/open-file-modal.component';
import { DesignerService } from 'src/app/services/designer.service';

@Component({
  selector: 'app-client-request-page',
  templateUrl: './client-request.page.html',
  styleUrls: ['./client-request.page.scss'],
})

export class ClientRequestPage {

  client = {photoPath: null, phoneNumber: null, countryCode: null, moodboard: null, firstName: null, lastName: null};


  constructor(private designerService: DesignerService, private route: ActivatedRoute, private router: Router, private modalController: ModalController) {}

  ngOnInit() {
    const consultationPaymentId = this.route.snapshot.params.paymentId;
    this.designerService.getDesignerClient(consultationPaymentId).subscribe((res: any) => {
      this.client = res;
      console.log(res)
    })
  }


  goToChat() {
    this.router.navigateByUrl(`/messenger?contact=${this.client['clientId']}`)
  }

  goToCreateOffer() {
    this.router.navigateByUrl(`/create-offer/${this.client['consultationId']}`)
  }


}
