import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Project } from './models/project.model';
import { User } from './models/user.model';

import { AccountService } from './services/account.service';
import { LanguageService } from './services/language.service';
import { ProjectService } from './services/project.service';
import { Intercom } from 'ng-intercom';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private accountService: AccountService,
    private projectService: ProjectService,
    private languageService: LanguageService,
    private storage: Storage,
    public intercom: Intercom
  ) {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
  }

  ngOnInit() {
    this.intercom.boot({
      // eslint-disable-next-line @typescript-eslint/naming-convention
      app_id: 'ub85mv53'
    });
    this.setCurrentUser();
    this.setCurrentProject();
    this.languageService.setInitialAppLanguage();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    if (user) {
      this.accountService.setCurrentUser(user);
    } else {
      this.accountService.setCurrentUser(null);
    }
  }

  setCurrentProject() {
    const project: Project = JSON.parse(sessionStorage.getItem('project'));
    this.projectService.setCurrentProject(project);
  }
}
