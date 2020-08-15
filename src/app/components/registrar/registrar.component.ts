import { Component, OnInit, Input } from '@angular/core';
import { Grupo } from "../../interfaces/grupo";
import { GrupoService } from "../../services/grupo.service";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent implements OnInit {

  grupos: Grupo[];

  constructor(private grupoService: GrupoService) { }

  equipos: string[] = [
    "Equipo A",
    "Equipo B",
    "Equipo C",
    "Equipo D"
  ];


  ngOnInit(): void {
  }

  add(nombre: string, pais: string, puntos: number): void {
    nombre = nombre.trim();
    if (!nombre) { return; }
    this.grupoService.addGrupo({ nombre, pais, puntos} as Grupo)
      .subscribe(grupo => {
        this.grupos.push(grupo);
      });
  }
}
