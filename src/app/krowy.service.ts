import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Krowy } from './krowy';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KrowyService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getKrowy(): Observable<Krowy[]> {
    return this.http.get<Krowy[]>(`${this.apiServerUrl}/krowy/all`);
  }

  public addKrowy(krowy: Krowy): Observable<Krowy> {
    return this.http.post<Krowy>(`${this.apiServerUrl}/krowy/add`, krowy);
  }

  public updateKrowy(krowy: Krowy): Observable<Krowy> {
    return this.http.put<Krowy>(`${this.apiServerUrl}/krowy/update`, krowy);
  }

  public deleteKrowy(krowyId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/krowy/delete/${krowyId}`);
  }
}
