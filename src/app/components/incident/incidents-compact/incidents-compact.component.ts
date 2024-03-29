import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '@app/services/data.service';
import {Incident} from '@models/incidents.model';
import {Modal} from '@models/modal.model';
import {DressingService} from '@app/services/dressing.service';

@Component({
  selector: 'app-incidents-compact',
  templateUrl: './incidents-compact.component.html',
  styleUrls: ['./incidents-compact.component.scss']
})
export class IncidentsCompactComponent implements OnInit {
  incidents: Incident[];
  @Input() departmentCode: string;
  modal: Modal;
  searchNumber: string;

  constructor(private dataService: DataService, private dressingService: DressingService) {
  }

  ngOnInit(): void {
    this.dataService.getIncidents().subscribe((incidents: Incident[]) => {
      this.incidents = incidents.filter((s: Incident) => s.department === this.departmentCode);
    }, () => {
      this.dressingService.message('Incident data loading unsuccessful. Try again later.');
    });

    this.modal = {
      title: 'Incidents',
      buttons: ['okay'],
    };
  }

  openModal(event: MouseEvent): void {
    document.querySelector('.modal-body').innerHTML = (event.target as HTMLElement).closest('.incidents-compact-overview').querySelector('.incidents-compact-body').outerHTML;
    document.querySelector('.modal').classList.add('modal-active');
  }
}
