import { Component, OnInit } from '@angular/core';
import { Project } from './models/project.model';
import { User } from './models/user.model';

import { AccountService } from './services/account.service';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private accountService: AccountService, private projectService: ProjectService) {}

  ngOnInit() {
    this.setCurrentUser();
    this.setCurrentProject();
  }

  setCurrentUser() {
    const user: User = JSON.parse(localStorage.getItem('user'));
    this.accountService.setCurrentUser(user);
  }

  setCurrentProject() {
    const project: Project = JSON.parse(sessionStorage.getItem('project'));
    console.log(project)
    this.projectService.setCurrentProject(project);
  }

}
