import { Component, OnInit, Input } from '@angular/core';
import { Grupo } from "../../interfaces/grupo";
import { GrupoService } from "../../services/grupo.service";
import { Router } from '@angular/router';

import { Partido } from "../../interfaces/partido";
import { PartidoService } from "../../services/partido.service";
import { group } from '@angular/animations';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  @Input() grupo: Grupo;

  constructor(private grupoService: GrupoService,
    private router: Router,
    private partidoService: PartidoService) { }



  equipos: string[] = [
    "Equipo A",
    "Equipo B",
    "Equipo C",
    "Equipo D"
  ];
  grupos: Grupo[];
  puntos: number;

  getGrupos(): void {
    this.grupoService.getGrupos()
      .subscribe((grupos) => { this.grupos= grupos });
  }

  ngOnInit(): void {
    this.getGrupos();
  }

  borrar(id:number):void{
    this.grupoService.deleteGrupo(this.grupo.id);

  }

  puntuar(goles1,goles2,id1,id2){
    if(goles1==goles2){
      this.puntos=1;
      this.updatePuntos(id1,this.puntos);
      this.updatePuntos(id2,this.puntos);
    }else if (goles1>goles2){
      this.puntos=3;
      this.updatePuntos(id1,this.puntos);
    }else if(goles1<goles2){
      this.puntos=3;
      this.updatePuntos(id2,this.puntos);
    }
  }

  updatePuntos(id,puntos){
    this.grupoService.updateGrupo({puntos} as Grupo).subscribe((grupo) => {
      this.grupos.push(grupo);
      });
  }

  rutaEditar(id){
    this.router.navigateByUrl('/update/'+id);
  }
}
