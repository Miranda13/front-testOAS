import { Component, OnInit } from '@angular/core';
import { Grupo } from "../../interfaces/grupo";
import { GrupoService } from "../../services/grupo.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  constructor(private grupoService: GrupoService) { }

  equipos: string[] = [
    "Equipo A",
    "Equipo B",
    "Equipo C",
    "Equipo D"
  ];
  grupos: Grupo[];

  getGrupos(): void {
    this.grupoService.getGrupos()
      .subscribe((grupos) => { this.grupos= grupos });
  }

  ngOnInit(): void {
    this.getGrupos();
  }


}
