import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as Prismic from 'prismic-javascript';
import {Context} from '../struts/context';
import {CONFIG} from '../prismic-configuration';

@Injectable({
  providedIn: 'root'
})
export class PrismicService {

  constructor(private http: HttpClient) {
  }

  public buildContext() {
    const options = {};
    return Prismic.api(CONFIG.apiEndpoint, {accessToken: CONFIG.accessToken})
      .then((api) => {
        return {
          api,
          endpoint: CONFIG.apiEndpoint,
          accessToken: CONFIG.accessToken,
          linkResolver: CONFIG.linkResolver
        } as Context;
      })
      .catch(e => console.log(`Error during connection to your Prismic API: ${e}`));
  }

  public validateOnboarding() {
    const options: any = {
      headers: new HttpHeaders()
    };
    options.headers = options.headers.append('Content-Type', 'application/json');

    this.http.post(`${CONFIG.apiEndpoint}/app/settings/onboarding/run`, null, options)
      .subscribe(
        null,
        (err) => {
          console.log('Cannot access your repository, check your api endpoint:');
          console.log(err);
        }
      );
  }

  public query(q: string) {
    return Prismic.getApi(CONFIG.apiEndpoint)
      .then(function (api) {
        return api.query(q, null, null); // An empty query will return all the documents
      });
  }

  public queryEvents() {
    return Prismic.getApi(CONFIG.apiEndpoint)
      .then(function (api) {
        return api.query(Prismic.Predicates.at('document.type', 'events'), {orderings: '[my.events.event-date desc]'}, null);
      });
  }

  public getPostById(id: string) {
    return Prismic.getApi(CONFIG.apiEndpoint)
      .then(function (api) {
        return api.query(Prismic.Predicates.at('document.id', id), null, null);
      });
  }
}
