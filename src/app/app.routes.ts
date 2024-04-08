import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { CreateMoviesComponent } from './components/create-movies/create-movies.component';

export const routes: Routes = [
    {path:'', component: HomePageComponent},
    {path:'movies', component: MoviesComponent},
    {path:'movies/:id', component: MovieDetailComponent},
    {path:'create-movies', component: CreateMoviesComponent}
];
