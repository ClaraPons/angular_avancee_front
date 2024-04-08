import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { DirectorsService } from '../../services/directors.service';
import { Location } from '@angular/common';
import { Movie } from '../../movies';
import {  FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Director } from '../../director';



@Component({
  selector: 'app-create-movies',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-movies.component.html',
  styleUrl: './create-movies.component.css'
})
export class CreateMoviesComponent {
  @Input() movie?: Movie

  constructor(private formBuilder: FormBuilder, private route : ActivatedRoute, private moviesService: MoviesService, private directorService: DirectorsService, private location: Location) {}

  checkoutForm: FormGroup = this.formBuilder.group({
    movie_name: "test",
    movie_length: 0,
    movie_lang: "fr",
    age_certificate: 0,
    release_date: "1965-04-01T00:00:00.000Z",
    firstName: "Wes",
    lastName: "Anderson",
    director_id: 0
  });

  create(): void {
    const director = this.directorService.fetchAll().subscribe(result => {
      // const director = result.find((director: Director) => 
      //   director.first_name === this.checkoutForm.value.firstName && 
      //   director.last_name === this.checkoutForm.value.lastName
        result = result.filter((director: Director) => 
          director.first_name === this.checkoutForm.value.firstName && 
          director.last_name === this.checkoutForm.value.lastName
      );
      
      if (director) {
  
        console.log(this.checkoutForm.value.director_id); // Affiche l'ID du directeur récupéré
  
        // Une fois que vous avez récupéré l'ID du directeur, vous pouvez continuer avec la création du film
        // this.moviesService.create(this.checkoutForm.value).subscribe(result => {
        //   return this.location.back();
        // });
      } else {
        console.log("Aucun directeur trouvé pour les noms spécifiés.");
      }
    });
  }
  

}
