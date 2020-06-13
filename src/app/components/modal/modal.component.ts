import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {Modal} from '@models/modal.model';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('modalElement') modalElement: ElementRef;
  @Input() modal: Modal;

  ngAfterViewInit(): void {
    document.querySelectorAll('.modal').forEach((modal: HTMLElement) => modal.remove());
    this.modalElement.nativeElement.querySelector('.modal-body').innerHTML = this.modal.body;
    document.querySelector('body').prepend(this.modalElement.nativeElement);

    this.modal.title = this.modal.title === undefined ? 'View' : this.modal.title;
  }

  closeModal(): void {
    document.querySelector('.modal').classList.remove('modal-active');
  }
}
