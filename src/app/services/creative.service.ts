import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BASE_URL} from "../consts";
import {BehaviorSubjectItem} from "../models";

@Injectable({
  providedIn: 'root'
})
export class CreativeService {

  creatives: any = new BehaviorSubjectItem<any[]>([])

  constructor(private http: HttpClient) { }

  getAllCreatives() {
    return this.http.get(BASE_URL)
  }
  getOneCreative(id: string) {
    return this.http.get(`${BASE_URL}?id=${id}`)
  }
  createCreative(creative: any) {
    return this.http.post(BASE_URL, creative)
  }
  updateCreative(creative: any) {
    return this.http.put(BASE_URL, creative)
  }
  deleteCreative(id: string) {
    return this.http.delete(`${BASE_URL}?id=${id}`)
  }
}
