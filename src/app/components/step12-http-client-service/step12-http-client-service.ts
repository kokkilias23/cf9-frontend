import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { JokeService } from '../../shared/services/joke.service';

@Component({
  selector: 'app-step12-http-client-service',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './step12-http-client-service.html',
  styleUrl: './step12-http-client-service.css',
})
export class Step12HttpClientService {
  jokeService = inject(JokeService);
  dadText: string = '';
  chuckNorrisJoke: string = '';

  dadJokes(){
    this.jokeService.getDadJoke().subscribe((data) => {
      this.dadText = data.joke;
      console.log("DAD>>>", this.dadText);
    });
  }

  chuckNorrisJokes(){
    this.jokeService.getChuckNorrisJoke().subscribe((data) => {
      this.chuckNorrisJoke = data.value;
      console.log("CHUCK NORRIS>>>", this.chuckNorrisJoke);
    });
  }
}
