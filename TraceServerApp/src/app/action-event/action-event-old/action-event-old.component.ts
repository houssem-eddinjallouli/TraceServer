import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActionEventService } from '../../services/action-event.service';

@Component({
  selector: 'app-action-event-old',
  imports: [CommonModule],
  templateUrl: './action-event-old.component.html',
  styleUrl: './action-event-old.component.css'
})
export class ActionEventOldComponent implements OnInit{

  constructor(public service: ActionEventService) {}

  ngOnInit(): void {
    this.service.refreshList();
  }
}
