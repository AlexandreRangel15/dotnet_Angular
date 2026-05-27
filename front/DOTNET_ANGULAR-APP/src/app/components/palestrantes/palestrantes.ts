import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TituloComponent } from "../../shared/titulo/titulo.component";

@Component({
  selector: 'app-palestrantes',
  imports: [TituloComponent, RouterModule],
  templateUrl: './palestrantes.html',
  styleUrl: './palestrantes.scss',
})
export class Palestrantes {}
