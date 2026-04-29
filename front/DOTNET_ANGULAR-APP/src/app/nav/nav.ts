import { Component } from '@angular/core';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.html',
  // Se o arquivo .css não existe, deixe o array vazio:
  styleUrls: [] 
})
export class Nav {
  // Adicione esta linha:
  isCollapsed: boolean = true; 

  constructor() {}
}