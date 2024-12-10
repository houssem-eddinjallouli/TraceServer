import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { ActionEvent } from './action-event.model';
import { NgForm } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ActionEventService {
  file?: File;
  url:string = environment.apiBaseUrl + '/ActionEvent'
  list: ActionEvent[] = [];
  oldList: ActionEvent[] = [];
  formData: ActionEvent = new ActionEvent()
  formSubmitted: boolean = false;
  constructor(private http: HttpClient) { }

  refreshList() {
    this.http.get(this.url)
      .subscribe({
        next: res => {
          const events = res as ActionEvent[];
          //this.list = events.filter(ev => !ev.isDeleted);
          this.list  = events;
          this.oldList = events.filter(ev => ev.isDeleted);
        },
        error: err => { console.log(err) }
      })
  }

  postActionEvent() {
    const formData = new FormData();
  
    // Append ActionEvent fields to FormData
    formData.append('Title', this.formData.title);
    formData.append('Description', this.formData.description);
    formData.append('CreatedAt', this.formData.createdAt.toISOString());
    if (this.formData.updatedAt) {
      formData.append('UpdatedAt', this.formData.updatedAt.toISOString());
    }
    formData.append('IsDeleted', String(this.formData.isDeleted));
  
    // Append the file if it exists
    if (this.file) {
      formData.append('file', this.file);
    }
  
    return this.http.post(this.url, formData, {
      headers: {
        // Let the browser set the correct headers for multipart/form-data
      }
    });
  }
  

  putActionEvent() {
    
    this.formData.updatedAt = new Date();
    return this.http.put(this.url + '/' + this.formData.actionEventId, this.formData)
  }

  activateifnotorelse(event: ActionEvent) {
    event.isDeleted = !event.isDeleted;
    return this.http.put(this.url + '/' + event.actionEventId, event)
  }


  deleteActionEvent(id: number) {
    return this.http.delete(this.url + '/' + id)
  }

  resetForm(form: NgForm) {
    form.form.reset()
    this.formData = new ActionEvent()
    this.formSubmitted = false
  }

}
