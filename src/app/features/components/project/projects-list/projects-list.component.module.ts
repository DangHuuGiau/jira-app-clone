import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProjectsListComponent } from './projects-list.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, FormsModule, RouterModule, ProjectsListComponent],
  exports: [ProjectsListComponent],
})
export class ProjectsListComponentModule {}
