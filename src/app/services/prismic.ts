import {Injectable} from '@angular/core';
import * as Prismic from 'prismic-javascript';
import {CONFIG} from '../prismic-configuration';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrismicService {

  constructor() {
  }

  public query(q: string): Observable<any> {
    return from(Prismic.getApi(CONFIG.apiEndpoint)
      .then(function (api) {
        return api.query(q, null, null); // An empty query will return all the documents
      }));
  }

  public queryEvents(pageSize: number = 3): Observable<any> {
    return from(Prismic.getApi(CONFIG.apiEndpoint)
      .then(function (api) {
        return api.query(Prismic.Predicates.at('document.type', 'events'), {
          orderings: '[my.events.event-date desc]',
          pageSize: pageSize
        }, null);
      }));
  }

  public queryMembers(): Observable<any> {
    return from(Prismic.getApi(CONFIG.apiEndpoint)
      .then(function (api) {
        return api.query(Prismic.Predicates.at('document.type', 'members'), {
            orderings: '[my.members.priority desc]',
            pageSize: 100
          },
          null);
      }));
  }

  public getPostById(type: string, id: string): Observable<any> {
    return from(Prismic.getApi(CONFIG.apiEndpoint)
      .then(function (api) {
        return api.query([
          Prismic.Predicates.at('document.type', type),
          Prismic.Predicates.at('document.id', id)
        ], null, null);
      }));
  }
}
