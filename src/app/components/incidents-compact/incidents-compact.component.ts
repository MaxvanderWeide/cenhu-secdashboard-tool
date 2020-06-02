import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '@app/services/data.service';
import {Incident} from '@models/incidents.model';

@Component({
  selector: 'app-incidents-compact',
  templateUrl: './incidents-compact.component.html',
  styleUrls: ['./incidents-compact.component.scss']
})
export class IncidentsCompactComponent implements OnInit{
  incidents: Incident[];
  @Input() departmentCode: string;

  constructor(private dataService: DataService) {
  }

  incidentIcon(severity: string): string {
    switch (severity) {
      case 'high':
        return 'fa-exclamation-triangle high-severity';
      case 'medium':
        return 'fa-exclamation-circle medium-severity';
      case 'low':
        return 'fa-bath low-severity';
    }
  }

  ngOnInit(): void {
    console.log(this.departmentCode);
    this.incidents = this.dataService.getIncidentsWithDepartment(this.departmentCode);
  }
}
