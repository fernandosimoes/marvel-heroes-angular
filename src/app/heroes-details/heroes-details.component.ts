import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { MarvelService } from "../services/marvel.service";
import { MarvelList, Hero } from '../models/marvel.model'

@Component({
  selector: 'app-heroes-details',
  templateUrl: './heroes-details.component.html',
  styleUrls: ['./heroes-details.component.scss']
})

export class HeroesDetailsComponent implements OnInit {
  private marvelList: MarvelList<any>
  private hero: Hero;
  private heroid;
  constructor(
    private activatedRoute:ActivatedRoute,
    private marvelService:MarvelService,
    private location:Location,
  ) { }

  ngOnInit() {
    this.heroid = +this.activatedRoute.snapshot.paramMap.get('id');
    this.marvelService.getHero(this.heroid).subscribe(heroresult => {
      this.marvelList = heroresult.data;
      this.marvelList.results.map(hero => this.hero = hero)
    })
  }

  goBack() {
    this.location.back();
  }
}
