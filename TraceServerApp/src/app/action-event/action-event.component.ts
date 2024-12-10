import { Component, OnInit } from '@angular/core';
import { ActionEventService } from '../services/action-event.service';
import { CommonModule } from '@angular/common';
import { ActionEventFormComponent } from './action-event-form/action-event-form.component';
import { ActionEvent } from '../services/action-event.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-action-event',
  imports: [CommonModule, ActionEventFormComponent],
  templateUrl: './action-event.component.html',
  styleUrl: './action-event.component.css',
})
export class ActionEventComponent implements OnInit {
  constructor(
    public service: ActionEventService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.service.refreshList();
  }

  displayform = false;

  populateForm(selectedRecord: ActionEvent) {
    if (this.displayform === false) this.displayform = true;
    this.service.formData = Object.assign({}, selectedRecord);
  }

  onDelete(id: number) {
    if (confirm('Are you sure to delete this record?'))
      this.service.deleteActionEvent(id).subscribe({
        next: (res) => {
          this.service.list = res as ActionEvent[];
          this.toastr.error('Deleted successfully', 'Payment Detail Register');
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  isDelete(event: ActionEvent) {
    this.service.activateifnotorelse(event).subscribe({
      next: (res) => {
        this.service.list = res as ActionEvent[];
        //this.toastr.error('Deleted successfully', 'Payment Detail Register');
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  getImageUrl(event: ActionEvent): string {
    if (event.imageData ) {
      return 'data:' + event.imageData.type + ';base64,' + event.imageData;
    }
    return '';
  }

}
