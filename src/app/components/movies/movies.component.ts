import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../movies';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit {
  constructor(private readonly moviesService: MoviesService) {}

  movies : Movie[] = []

 ngOnInit(): void {
   this.moviesService.fetchAll().subscribe(result => {
      return this.movies = result
    })
  }
}
