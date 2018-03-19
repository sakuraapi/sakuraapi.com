import {HttpClient}     from '@angular/common/http';
import {Injectable}     from '@angular/core';
import {environment}    from '../../../environments/environment';
import {BaseApiService} from './base-api';

@Injectable()
export class WordpressApiService extends BaseApiService {

  constructor(private http: HttpClient) {
    super(http, environment.api.wordpress);
  }

}
