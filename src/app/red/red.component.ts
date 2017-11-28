import { Component, OnInit } from '@angular/core';
import {ColorService} from '../color.service';

@Component({
  selector: 'app-red',
  templateUrl: './red.component.html',
  styleUrls: ['./red.component.css']
})
export class RedComponent implements OnInit {
  color:string = 'Pink';

  constructor(private colorService:ColorService) {
    colorService.color$.subscribe(
      color=>{
        this.color = color;
      }
    )
  }

  ngOnInit() {
  }

  upOne(){
    console.log('up one')
  }

}
