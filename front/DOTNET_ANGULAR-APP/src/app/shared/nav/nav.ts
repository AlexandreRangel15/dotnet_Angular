// src/app/nav/nav.ts
import { Component } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse'; // Certifique-se de importar aqui!
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router'; // Importar RouterModule para usar routerLink no nav.html

@Component({
  selector: 'app-nav', // ou o seletor correspondente
  standalone: true,
  imports: [CollapseModule, BsDropdownModule, RouterModule], // O Nav precisa importar o CollapseModule e BsDropdownModule para usar no HTML dele
  templateUrl: './nav.html',
  styleUrl: './nav.scss'
})
export class Nav {
  // Crie a variável de controle aqui dentro!
  isCollapsed = false; 
}