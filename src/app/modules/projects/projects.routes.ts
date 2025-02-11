import {Routes} from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import ProjectDetailComponent from './components/project-detail/project-detail.component';

export const PROJECTS_ROUTES:Routes = [
  { path:'' , component: ProjectListComponent },
  { path:':slug' , component: ProjectDetailComponent },
];
