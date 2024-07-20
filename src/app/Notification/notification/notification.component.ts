import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../../signalr.service';
import { ToastrService } from 'ngx-toastr';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent{
  title:any = "Notification";
  constructor(private service: SignalRService) {
    
  }


  
}
