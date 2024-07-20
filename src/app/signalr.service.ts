import { Inject, Injectable, OnInit, PLATFORM_ID } from '@angular/core';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class SignalRService implements OnInit {
  private hubConnection: HubConnection;
  private readonly hubUrl = 'http://localhost:5218/notificationHub'; // Update with your backend URL

  constructor(private toastr: ToastrService) {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl(this.hubUrl, {
        accessTokenFactory: () => this.getToken() // Replace with your method to get the JWT token
      })
      .configureLogging(LogLevel.Information)
      .build();

      this.startConnection();
      this.registerOnServerEvents();
      }  
  ngOnInit(): void {
    
  }

  private getToken(): string {
    const token = JSON.stringify(localStorage.getItem('token'));
    if (token =="") {
      return "";
    }
    return token;
  }

  private startConnection(): void {
    this.hubConnection
      .start()
      .then(() => console.log('SignalR connected'))
      .catch(err => console.error('SignalR connection error: ', err));
  }

  private registerOnServerEvents(): void {
    this.hubConnection.on('ReceiveNotification',(message: string) => {
      console.log('Notification received: ', message);
      // Handle the notification here, e.g., show a toast
    });
  }
 
}
