import { Routes } from '@angular/router';
import { ActionEventComponent } from './action-event/action-event.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { ActionEventFormComponent } from './action-event/action-event-form/action-event-form.component';
import { ActionEventOldComponent } from './action-event/action-event-old/action-event-old.component';

export const routes: Routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' } ,
    { path: 'welcome', component: ActionEventComponent } ,
    { path: 'add-event', component: ActionEventFormComponent } ,
    { path: 'old-events', component: ActionEventOldComponent } ,
    { path: '**' , component:ForbiddenComponent},
];
