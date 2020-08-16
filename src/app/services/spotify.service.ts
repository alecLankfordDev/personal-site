import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  baseUrl = 'https://api.spotify.com/v1/playlists/37i9dQZEVXbMDoHDwVN2tF';


constructor(private http: HttpClient) { }

  // getTopSongs() {
  //   return this.http.get(this.baseUrl).pipe(map(res => res));
  // }

}
