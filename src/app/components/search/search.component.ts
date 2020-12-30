import { Component, Input, OnInit } from '@angular/core';
import { Heroes } from '../../interfaces/heroes';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input() heroes: Heroes[] = [];
  @Input() index: number;
  termino: string;

  constructor(private activatedRoute: ActivatedRoute,
              private heroesService: HeroesService,
              private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.termino = value[`term`];
      this.heroes = this.heroesService.buscarHeroe(this.termino);
    });
  }

  ngOnInit(): void {
  }

  verHeroe(): void {
    console.log(this.index);
    // this.router.navigate(['/heroe', this.index]);
  }

}
