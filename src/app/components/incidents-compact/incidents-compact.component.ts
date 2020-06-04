import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '@app/services/data.service';
import {Incident} from '@models/incidents.model';
import {Modal} from '@models/modal.model';

@Component({
  selector: 'app-incidents-compact',
  templateUrl: './incidents-compact.component.html',
  styleUrls: ['./incidents-compact.component.scss']
})
export class IncidentsCompactComponent implements OnInit {
  incidents: Incident[];
  @Input() departmentCode: string;
  modal: Modal;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getIncidents().subscribe((incidents: Incident[]) => {
      this.incidents = incidents.filter((s: Incident) => s.department === this.departmentCode);
    });

    this.modal = {
      buttons: [],
    };
    this.modal.buttons.push('save');
  }

  openModal(event: MouseEvent): void {
    document.querySelector('.modal-body').innerHTML = (event.target as HTMLElement).closest('.incidents-compact-overview').querySelector('.incidents-compact-body').outerHTML;
    document.querySelector('.modal').classList.add('modal-active');
  }
}
