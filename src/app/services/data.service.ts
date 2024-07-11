import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Data {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: string;
  };
  results: Character[];
}
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly API = environment.api;

  constructor(private readonly http: HttpClient) {}

  getCharacters(): Observable<Data> {
    return this.http.get<Data>(this.API);
  }
  getCharactersPage(url:string): Observable<Data> {
    return this.http.get<Data>(url);
  }
}
