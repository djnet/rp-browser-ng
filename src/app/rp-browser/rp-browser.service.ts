import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {RpLaunchApi} from './launches/launches.component';

@Injectable({
  providedIn: 'root'
})
export class RpBrowserService {
  private endpoint = 'http://127.0.0.1:8080';
  private apiUrl = this.endpoint + '/ui/api';
  private project = 'projet1';
  // # You can get UUID from user profile page in the Report Portal.
  private token = 'cc3e2721-ba68-45cf-ad92-93db9762c798';

  constructor(
    private http: HttpClient) {
    // RPClient = require('reportportal-client');
    //
    // rpClient = new RPClient({
    //   token: "00000000-0000-0000-0000-000000000000",
    //   endpoint: "http://your-instance.com:8080/api/v1",
    //   launch: "LAUNCH_NAME",
    //   project: "PROJECT_NAME"
    // });
    //
    // rpClient.checkConnect().then((response) => {
    //   console.log('You have successfully connected to the server.');
    //   console.log(`You are using an account: ${response.fullName}`);
    // }, (error) => {
    //   console.log('Error connection to server');
    //   console.dir(error);
    // });
  }
  public searchLaunches(project: string): Observable<RpLaunchApi> {
    // now returns an Observable of Config
    const url = this.apiUrl + '/' + project;
    return this.http.get<RpLaunchApi>(url);
  }

}
