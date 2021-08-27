

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Activity } from './types';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _httpClient: HttpClient) { }

  getActivity(activityId: String):Observable<Activity> {
    return this._httpClient.get<Activity>(API + "/id/" + activityId);
  }

  getAllActivities():Observable<Activity[]> {
    return this._httpClient.get<Activity[]>(API2);
  }
}

const API = "https://orangevalleycaa.org/api/videos";

const API2="https://raw.githubusercontent.com/jaison043/Json/main/activites.json"
const API3="https://www.reddit.com/r/gifs/top/.json?limit=105sort=hot"

