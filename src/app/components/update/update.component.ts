import { Component, OnInit, Input } from '@angular/core';
import { Grupo } from "../../interfaces/grupo";
import { Location } from '@angular/common';
import { GrupoService } from "../../services/grupo.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  @Input() grupo: Grupo;
  grupos: Grupo[];

  constructor(private grupoService: GrupoService, private location: Location) { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.location.back();
  }

  guardar(nombre: string, pais: string): void {
    this.grupoService.updateGrupo({ nombre, pais} as Grupo)
      .subscribe((grupo) => {
        this.grupos.push(grupo);
        this.goBack()});
  }

}
