import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

getData(){
  const url_api = 'https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/INDICATOR/1002000001/es/10/true/BISE/2.0/6d41d9f2-f06c-d30f-93c4-be921bc20c23?type=json';
  return this.http.get(url_api);
}

}
