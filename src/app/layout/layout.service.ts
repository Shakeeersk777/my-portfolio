import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IUserInfo } from '../core/models/user-info.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  _httpClient: HttpClient = inject(HttpClient); 

  getPortfolioData(): Observable<IUserInfo> {
    return this._httpClient.get<IUserInfo>(environment.apiUrl);
  }

}
