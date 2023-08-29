import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { IonContent } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { take } from 'rxjs/operators';
import { Project } from 'src/app/models/project.model';
import { DesignerService } from 'src/app/services/designer.service';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-designer-portfolio',
  templateUrl: './designer-portfolio.page.html',
  styleUrls: ['./designer-portfolio.page.scss'],
})

export class DesignerPortfolioPage implements OnInit {

  @ViewChild('slides') slides: IonSlides;

  @ViewChild(IonContent) content: IonContent;

  isScrolledDown: boolean;

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private designerService: DesignerService,
  ) {}

  designerId: any;
  designerDetails: any;

  public comments = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Aliquam id elementum elit, pulvinar pretium turpis. Morbi lobortis lacinia gravida. In sed tortor mauris.',
      author: 'John Doe'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui',
      author: 'John Boe'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui',
      author: 'John Bro'
    },
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget neque vel libero tristique dictum. Suspendisse at justo dui',
      author: 'Ide Ide'
    },
  ];

  ngOnInit(): void {
    this.designerId = this.route.snapshot.params.id;
    this.designerService.getDesignerPortfolio(this.designerId).subscribe(res => this.designerDetails = res);
  }

  async logScrollEnd() {
    const scrollElement = await this.content.getScrollElement(); // get scroll element
    this.isScrolledDown = scrollElement.scrollTop > 70;
  }

  getOptions(){
    return window.innerWidth > 700 ? {slidesPerView: 2} : {slidesPerView: 1}
  }

  removeProjectDraft(){
    this.projectService.setCurrentProject(new Project());
  }

  bookConsultation() {
    
  }
}
