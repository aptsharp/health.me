import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://localhost:3000/api';
  public patient: any;

  constructor(private http: HttpClient) {
    this.getPatient('5c15d243873c4854e2d08379').then(patient => {
      this.patient = patient;
    });
  }

  getPatient(id: string) {
    return this.http.get(`${this.apiUrl}/patient/${id}`).toPromise();
  }

  getMessages(id: string) {
    return this.http.get(`${this.apiUrl}/messages/patient/${id}`).toPromise();
  }

  postMessage(payload: any) {
    return this.http.post(`${this.apiUrl}/message`, payload).toPromise();
  }
}
