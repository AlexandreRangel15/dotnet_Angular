import { Component, OnInit } from '@angular/core';
import { TituloComponent } from "../../shared/titulo/titulo.component";
import { CollapseDirective } from "ngx-bootstrap/collapse";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
  imports: [TituloComponent, CollapseDirective]
})
export class PerfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
