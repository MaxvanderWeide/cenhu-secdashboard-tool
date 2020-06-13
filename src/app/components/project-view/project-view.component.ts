import {Component} from '@angular/core';
import {DataService} from '@app/services/data.service';
import {Project} from '@models/project.model';
import {DressingService} from '@app/services/dressing.service';

@Component({
  selector: 'app-project-overview',
  templateUrl: './project-view.component.html',
  styleUrls: ['./project-view.component.scss']
})
export class ProjectViewComponent {
  public projects: Project[] = [];
  constructor(private dataService: DataService, private dressingService: DressingService) {
    this.dataService.getProjectsData().subscribe(
      (projects: Project[]) => {
        this.projects = projects;
        console.log(this.projects);
      },
      () => {
        this.dressingService.message('Projects data loading unsuccessful. Try again later.');
      }
    );
  }

}
