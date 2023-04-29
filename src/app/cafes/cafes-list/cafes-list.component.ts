import { Component, OnInit } from '@angular/core';
import { Cafe } from '../cafe';
import { CafesService } from '../cafes.service';

@Component({
  selector: 'app-cafes-list',
  templateUrl: './cafes-list.component.html',
  styleUrls: ['./cafes-list.component.css']
})
export class CafesListComponent implements OnInit {

  cafe: Array<Cafe> = [];

  constructor(private CafeService: CafesService) { }
  getCafes(): void{
    this.CafeService.getCafe().subscribe((cafe) =>{
      this.cafe = cafe;
    });
 }

  ngOnInit() {
    this.getCafes();
  }

}
