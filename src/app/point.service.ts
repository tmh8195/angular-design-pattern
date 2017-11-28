import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {PointDataService} from './point-data.service';

@Injectable()
export class PointService {
  point:number=10;

  private pointSource = new BehaviorSubject<number>(this.point);
  points$ = this.pointSource.asObservable();

  constructor(private pointDataService:PointDataService) {
    this.point = this.pointDataService.getPoints();
    this.emitPoints();
  }

  emitPoints(){
    this.pointSource.next(this.point);
  }

  up(){
    this.point++;
    this.emitPoints();
  }

  down(){
    this.point--;
    this.emitPoints();
  }

}
