import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroes } from '../../interfaces/heroes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroes[] = [];

  constructor(private heroesService: HeroesService, private router: Router) { }

  ngOnInit(): void {
    localStorage.clear();
    this.heroes = this.heroesService.getHeroes();
  }

  verHeroe(index: number): void{
    this.router.navigate(['heroe/' + index]);
  }

}
