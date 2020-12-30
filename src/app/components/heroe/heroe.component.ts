import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroes } from '../../interfaces/heroes';
import {HeroesService} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

heroe: Heroes;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      // console.log(value['id']);
      this.heroe = this.heroesService.getHeroe(value['id']);
    });
  }

  ngOnInit(): void {
  }

  back(): void {
    const back = localStorage.getItem('back');
    console.log(back);
    if (back === 'heroes') {
      this.router.navigate(['heroes']);
      localStorage.removeItem('back');
    }
    else {
      const texto = localStorage.getItem('search');
      this.router.navigate(['search', texto]);
      localStorage.removeItem('back');
    }
  }

}
