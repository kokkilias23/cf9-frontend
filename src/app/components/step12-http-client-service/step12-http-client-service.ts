import { Component, inject , ChangeDetectorRef} from '@angular/core';
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
  cdr = inject(ChangeDetectorRef)
  dadText: string = '';
  chuckNorrisJoke: string = '';

  dadJokes(){
    console.log('dadJokes called!'); 
    this.jokeService.getDadJoke().subscribe((data) => {
      console.log('DAD data received:', data);
      this.dadText = data.joke;
      console.log("DAD>>>", this.dadText);
      this.cdr.detectChanges();
    });
  }

  chuckNorrisJokes(){
    console.log('chuckNorrisJokes called!');
    this.jokeService.getChuckNorrisJoke().subscribe((data) => {
      console.log('CHUCK NORRIS data received:', data); 
      this.chuckNorrisJoke = data.value;
      console.log("CHUCK NORRIS>>>", this.chuckNorrisJoke);
      this.cdr.detectChanges();
    });
  }
}
