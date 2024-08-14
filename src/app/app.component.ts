import { Component, OnInit } from '@angular/core';
import { ApiService } from './servicios/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  characters: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getCharacters().subscribe((data) => {
      this.characters = data.results;

      console.log('datos obtenidos de la Api: ',this.characters);
    });
  }
}
