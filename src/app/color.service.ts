import { Injectable } from '@angular/core';
import {Subject, BehaviorSubject} from 'rxjs';

@Injectable()
export class ColorService {
  color:string = 'Orange';

  private colorSource = new BehaviorSubject<string> (this.color);
  color$ = this.colorSource.asObservable();

  constructor() {
    this.emitColor()
  }

  getColor(){
    return this.color;
  }

  emitColor(){
    this.colorSource.next(this.color)
  }

}
