import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  getProjects(){
    return this.http.get(environment.apiUrl + 'projects');
  }

  deleteProject(id: string){
    return this.http.delete(`${environment.apiUrl}projects/${id}`)
  }
}
