import { Component, ViewChild } from '@angular/core';
import { ActionEventService } from '../../services/action-event.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ActionEvent } from '../../services/action-event.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-action-event-form',
  imports: [FormsModule],
  templateUrl: './action-event-form.component.html',
  styleUrl: './action-event-form.component.css',
})
export class ActionEventFormComponent {
  selectedFile: File | null = null;
  constructor(
    public service: ActionEventService,
    private toastr: ToastrService
  ) {}
  @ViewChild('file') fileInput: any;

  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.service.file = input.files[0];
    }
  }  

  onSubmit(form: NgForm) {
    this.service.formSubmitted = true
    if (form.valid) {
      if (this.service.formData.actionEventId == 0)
        this.insertRecord(form)
      else
        this.updateRecord(form)
    }

  }

  insertRecord(form: NgForm) {
    this.service.postActionEvent()
      .subscribe({
        next: res => {
          this.service.list = res as ActionEvent[];
          this.service.resetForm(form);
          this.selectedFile = null; // Clear selected file
          if (this.fileInput) {
            this.fileInput.nativeElement.value = ''; // Reset the file input
          }
          this.toastr.success('Inserted successfully!', 'Event registered!');
        },
        error: err => { 
          console.log(err);
         }
      })
  }
  updateRecord(form: NgForm) {
    this.service.putActionEvent()
      .subscribe({
        next: res => {
          this.service.list = res as ActionEvent[]
          this.service.resetForm(form)
          this.toastr.info('Updated successfully', 'Event registered')
        },
        error: err => { console.log(err) }
      })
   }

  
}
