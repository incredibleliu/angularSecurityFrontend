import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AppService {

  authenticated = false;

  constructor(private http: HttpClient) {
  }

  userUrl = 'user';
//   userUrl = 'http://localhost:8080/user';

  authenticate(credentials, callback) {

        const headers = new HttpHeaders(
            credentials ? { authorization : 'Basic ' + btoa(credentials.username + ':' + credentials.password) } : {});

        this.http.get(this.userUrl, {headers: headers}).subscribe(response => {
            if (response['name']) {
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            return callback && callback();
        });

    }

}
