import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly resourceUrl: string = '/account';
  private readonly baseUrl:  string = environment.server;

  constructor(private http: HttpClient) { }

  register(body: any) {
    return this.http.post(this.baseUrl + this.resourceUrl + '/register', body);
  }

  login(body: any) {
    return this.http.post(this.baseUrl + this.resourceUrl + '/login', body);
  }

}
