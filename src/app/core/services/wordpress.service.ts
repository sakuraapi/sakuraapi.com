import {HttpClient}          from '@angular/common/http';
import {Injectable}          from '@angular/core';
import {Observable}          from 'rxjs/Observable';
import {WordpressApiService} from '../http/wordpress-api.service';
import {WordpressPost}       from '../models/wordpress-post';

/*
 * For Wordpress API reference See: https://developer.wordpress.org/rest-api/reference/
 */

@Injectable()
export class WordpressService {

  private _totalPosts = 0;
  private _totalPages = 0;

  get totalPosts(): number {
    return this._totalPosts;
  }

  get totalPages(): number {
    return this._totalPages;
  }

  constructor(private api: WordpressApiService, private http: HttpClient) {
  }

  /**
   * Retrieves a list of posts.
   * see: https://developer.wordpress.org/rest-api/reference/posts/#list-posts
   * @param {number} page of the collection to return
   * @param {number} perPage number of posts to include per page (default 10)
   * @returns {Observable<WordpressPost[]>}
   */
  getPosts(page = 1, perPage?: number): Observable<WordpressPost[]> {

    if (page < 1 && page > this.totalPages) {
      return Observable.from([]);
    }

    let query = `page=${page}`;
    query += (perPage) ? `&per_page=${perPage}` : '';

    return this
      .api
      .get(`/posts?${query}`, {observe: 'response'})
      .map((resp) => {
        this._totalPosts = Number(resp.headers.get('x-wp-total')) || 0;
        this._totalPages = Number(resp.headers.get('x-wp-totalpages')) || 0;
        return resp.body;
      })
      .map(WordpressPost.fromJsonArray);
  }

  /**
   * Updates post and page counts and also returns `{posts; pages;}`.
   * see: https://developer.wordpress.org/rest-api/using-the-rest-api/pagination/
   * @returns {Observable<{posts: number; pages: number}>}
   */
  updateCounts(): Observable<{ posts: number; pages: number }> {
    return this
      .api
      .head(`/posts`, {observe: 'response'})
      .map((resp) => {
        this._totalPosts = Number(resp.headers.get('x-wp-total')) || 0;
        this._totalPages = Number(resp.headers.get('x-wp-totalpages')) || 0;
        return {
          posts: this.totalPosts,
          pages: this.totalPages
        };
      });
  }
}
