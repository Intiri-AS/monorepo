import { Component } from '@angular/core';
import { DesignerService } from 'src/app/services/designer.service';

@Component({
  selector: 'app-client-request-page',
  templateUrl: './client-request.page.html',
  styleUrls: ['./client-request.page.scss'],
})

export class ClientRequestPage {

  client = {createdMoodboards: []};

  constructor(private designerService: DesignerService) {}

  ngOnInit() {
    this.designerService.getDesigner(2).subscribe((res: any) => {
      this.client = res;
    })
  }
}
