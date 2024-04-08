import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movies';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {


}
