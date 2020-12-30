import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroes } from '../../interfaces/heroes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent implements OnInit {
  @Input() heroe: Heroes;
  @Input() index: number;

  @Output() idx: EventEmitter<number>;

  constructor(private router: Router) {
    this.idx = new EventEmitter();
  }

  ngOnInit(): void {
  }

  /*** Solucion con @output */
  /*verHeroe(): void {
    this.idx.emit(this.index);
  }*/

  /*** Solucion sin un @Output */
  verHeroe(index?: number): void {
    if (!index){
      localStorage.setItem('back', 'heroes');
      this.router.navigate(['heroe/' + this.index]);
    } else {
      localStorage.setItem('back', 'search');
      this.router.navigate(['heroe/' + index]);
    }
  }
}
