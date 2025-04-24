import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { environment } from 'src/environments/environment'; // Adjust if needed

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private apiUrl =  'http://localhost:7000/api/reclamations';

  constructor(private http: HttpClient) { }

  // Get all reclamations
  getReclamations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  // Add a new reclamation
  addReclamation(reclamation: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, reclamation);
  }

  // Update a reclamation
  updateReclamation(id: number, reclamation: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/update/${id}`, reclamation);
  }

  // Delete a reclamation
  deleteReclamation(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/delete/${id}`);
  }

  // Search reclamations by client name or product
  searchReclamations(query: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/search?q=${query}`);
  }
}
