import { Injectable } from '@angular/core';

export interface Equipo {
  name: string;
  id: number;
  jugadores: number;
}

const EQUIPOS: Equipo[] = [
  {id: 1, name: 'M17', jugadores: 15},
  {id: 2, name: 'M16', jugadores: 15},
  {id: 3, name: 'M18', jugadores: 15},
  {id: 4, name: 'M19', jugadores: 15},
  {id: 5, name: 'PRE-INTERMEDIA', jugadores: 15},
  {id: 6, name: 'INTERMEDIA', jugadores: 15},
  {id: 7, name: 'PRIMERA', jugadores: 15},
];

@Injectable({
  providedIn: 'root'
})

export class EquipoService {
  
  equipoSelecionables = EQUIPOS;

  equiposDelEntrenamiento : Set<Equipo>;

  constructor() {
    this.equiposDelEntrenamiento = new Set<Equipo>();
   }

  public getEquiposSeleccionables() : Set<Equipo>{
    let equiposSeleccionablesSet = new Set<Equipo>;
    for(let equipo of this.equipoSelecionables){
      equiposSeleccionablesSet.add(equipo);
    }
    return equiposSeleccionablesSet;
  }

  public getEquiposSeleccionados() : Set <Equipo>{
    return  this.equiposDelEntrenamiento;
  }

  public updateEquiposEntrenamiento(equipos : Set<Equipo>) {
    this.equiposDelEntrenamiento = equipos;
  }


}
