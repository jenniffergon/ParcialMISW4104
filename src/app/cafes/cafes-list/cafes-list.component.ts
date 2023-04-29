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
  origen: number = 0;
  blend: number = 0;

  constructor(private CafeService: CafesService) { }
  getCafes(): void{
    this.CafeService.getCafe().subscribe((cafe) =>{
      this.cafe = cafe;
    });
 }
  tiposCafe(){
    this.CafeService.getCafe().subscribe((cafe) =>{
      this.cafe = cafe;
      for (let elemento of this.cafe) {
        if(elemento["tipo"]=="Café de Origen"){
          this.origen = this.origen+1;
        }
        if(elemento["tipo"]=="Blend"){
          this.blend = this.blend+1;
        }
      }
    });
  }

  ngOnInit() {
    this.getCafes();
    this.tiposCafe();
  }

}
