import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiWraperService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCurrentAccount() {
    return this.http.get(this.apiUrl + 'admin/my-account');
  }
}
