import { Observable } from 'rxjs';
import { Md5 } from 'ts-md5/dist/md5'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MarvelResponse, Hero } from '../models/marvel.model';

@Injectable()
export class MarvelService {
  private _publicKey: string = "f52495028f10bfe35b1242d13eaabd64";
  private _privateKey: string = "e15ea8a6afc1636596f0c93cd3c53bba1202b99a";
  private _marvelRequestUrl: string = "https://gateway.marvel.com:443/v1/public";

  constructor(private _httpService: HttpClient) { }

  private getHash(timeStamp: string): string {
    let hashGenerator: Md5 = new Md5();
    hashGenerator.appendStr(timeStamp);
    hashGenerator.appendStr(this._privateKey);
    hashGenerator.appendStr(this._publicKey);
    let hash: string = hashGenerator.end().toString();
    return hash;
  }

  private getTimeStamp(): string {
    return new Date().valueOf().toString();
  }

  public getHeroes(): Observable<MarvelResponse<Hero>> {
    console.log('gethero')
    const requestParams = {
      "ts": this.getTimeStamp(),
      "hash": this.getHash(this.getTimeStamp())
    }
    return this._httpService.get<MarvelResponse<Hero>>(`${this._marvelRequestUrl}/characters?limit=10&apikey=${this._publicKey}`, { params: requestParams });
  }
  public getHero(id):Observable<MarvelResponse<Hero>> {

    const requestParams = {
      "ts": this.getTimeStamp(),
      "hash": this.getHash(this.getTimeStamp())
    }
    return this._httpService.get<MarvelResponse<Hero>>(`${this._marvelRequestUrl}/characters/${id}?apikey=${this._publicKey}`, { params: requestParams });
  }
}