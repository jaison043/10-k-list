import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Activity } from '../services/types';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  activityList: Observable<Activity[]>;
  constructor(private dataService: DataService) { 

    this.activityList=dataService.getAllActivities();
  }

 
   

  
  }


