import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost/angularUniversal/backendUniversal/wordpress/wp-json/wp/v2/posts';

  getPosts(){
    return this.http.get(this.configUrl);
  }
}
