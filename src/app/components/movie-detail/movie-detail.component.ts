import { Component, Input } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../movies';
import { Location, NgIf, DatePipe, NgFor } from '@angular/common';
import { DirectorsService } from '../../services/directors.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [NgIf, DatePipe, NgFor],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {

  @Input() movie?: Movie
  @Input() actors?: any
  @Input() director?: any

  constructor(private route : ActivatedRoute, private moviesService: MoviesService, private directorService: DirectorsService, private location: Location) {}

  ngOnInit(): void {
     this.fetchbyId()
  }

  fetchbyId(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.moviesService.fetchById(id).subscribe(result => {
      this.fetchById(result.director_id)
      this.getActorsByMovieId()
      return this.movie = result
    })
  }
  
  getActorsByMovieId(): void {
    const id  = Number(this.route.snapshot.paramMap.get('id'))
    this.moviesService.getActorsByMovieId(id).subscribe(result => {
      return this.actors = result
    })
  }
  
  fetchById(director_id: number): void {
    this.directorService.fetchById(director_id).subscribe(result => {
      return this.director = result
    })
  }

  goBack(): void {
    this.location.back()
  }

}
