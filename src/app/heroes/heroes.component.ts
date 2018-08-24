import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../services/marvel.service';
import { MarvelList } from '../models/marvel.model';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: MarvelList<{}>;
  constructor(private marvelService: MarvelService) { }

  ngOnInit() {
    this.marvelService.getHeroes().subscribe(data =>{
      this.heroes = data.data;
      console.log(this.heroes);
    })
  }
}
