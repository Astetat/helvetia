import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';
import {Server} from '../beans/server';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  private labelValidation = new BehaviorSubject<boolean>(true);

  constructor(private httpClient: HttpClient) { }


  /* LabelValidation set as BehaviourSubject to ease Input Difficulty on Component*/
  setLabelValidation(value: boolean): void {
    this.labelValidation.next(value);
  }

  getLabelValidation(): Observable<boolean> {
    return this.labelValidation.asObservable();
  }

  /* Sorting the properties with the name server from json file*/
  getServers(): Observable<Server[]> {
    return this.getJSON().pipe(map(json => this.sortJSON(json)));
  }

  private getJSON(): Observable<any> {
    return this.httpClient.get('http://localhost:4200/assets/data.json');
  }

  private sortJSON(json: any): Server[] {
    const servers: Server[] = [];
    this.findServerPropertiesRecursive(json, servers);
    return servers;
  }

  /**
   * @param object json Object to Sort
   * @param servers Sorted Server Array
   * Json Object will iterate through objects and found Objects with the name Server will be added to the Server Array
   */
  private findServerPropertiesRecursive(object: any, servers: Server[]): void{
    Object.keys(object).forEach(name => {
      if (typeof object[name] === 'object' && name === 'server') {
        servers.push(object[name]);
      }
      if (typeof object[name] === 'object' && object[name] !== null) {
        this.findServerPropertiesRecursive(object[name], servers);
      }
    });
  }

}
