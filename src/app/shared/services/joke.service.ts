import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DadJokes, ChuckNorrisJoke } from '../interfaces/jokes';
import { Observable } from 'rxjs';


const DAD_JOKES_API_URL = 'https://icanhazdadjoke.com/';
const CHUCK_NORRIS_JOKES_API_URL = 'https://api.chucknorris.io/jokes/random';

@Injectable({
  providedIn: 'root',
})
export class JokeService {
  http:HttpClient = inject(HttpClient);

  // constructor(private http: HttpClient) {}

  getDadJoke(): Observable<DadJokes> {
    return this.http.get<DadJokes>(DAD_JOKES_API_URL, {
      headers: { Accept: 'application/json' },
    });
  }

  getChuckNorrisJoke(): Observable<ChuckNorrisJoke> {
    return this.http.get<ChuckNorrisJoke>(CHUCK_NORRIS_JOKES_API_URL);
  }
}