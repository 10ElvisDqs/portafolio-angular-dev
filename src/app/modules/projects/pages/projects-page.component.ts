import { Component } from '@angular/core';
import { ProjectListComponent } from "../components/project-list/project-list.component";

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  imports: [ProjectListComponent],
})
export default class ProjectsPageComponent {}
