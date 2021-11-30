import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {map, Observable} from "rxjs";
import {Pet} from "../model/pet";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url = `${environment.backendUrl}/pets`;
  }

  getPets(): Observable<any> {
    return this.http.get<Pet[]>(this.url)
      .pipe(map(array => array.sort((a, b) => a.name.localeCompare(b.name))));
  }

  addPet(pet: Pet): Observable<any> {
    return this.http.post(this.url, pet);
}

  findByName(name: string): Observable<any> {
    return this.http.get(this.url + '/' + name);
  }

  deleteById(id: number) {
    return this.http.delete(this.url + '/' + id);
  }
}
