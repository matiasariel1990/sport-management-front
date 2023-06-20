import { Injectable } from '@angular/core';

export interface Entrenamiento{
  id : number;
  fecha : string;
  hora : string;
  estado : Estado;
}

export enum Estado{
  PROGRAMADO,
  ENCURSO,
  CALIFICADO,
  FINALIZADO,
  SUSPENDIDO  
}

const ENTRENAMIENTOS: Entrenamiento[] = [
  {id: 15, fecha: '07/02', hora: '21:00', estado: Estado.PROGRAMADO},
  {id: 18, fecha: '10/02', hora: '21:00', estado: Estado.PROGRAMADO},
  {id: 19, fecha: '14/02', hora: '21:00', estado: Estado.PROGRAMADO},
  {id: 23, fecha: '18/02', hora: '21:00', estado: Estado.PROGRAMADO},
  {id: 25, fecha: '22/02', hora: '21:00', estado: Estado.PROGRAMADO},
  {id: 33, fecha: '25/02', hora: '21:00', estado: Estado.PROGRAMADO},
  {id: 35, fecha: '01/03', hora: '21:00', estado: Estado.PROGRAMADO},
];

const ENTRENAMIENTOS_FINALIZADOS: Entrenamiento[] = [
  {id: 15, fecha: '31/01', hora: '21:00', estado: Estado.FINALIZADO},
  {id: 18, fecha: '03/02', hora: '21:00', estado: Estado.FINALIZADO}
];

@Injectable({
  providedIn: 'root'
})

export class EntrenamientoService {

  constructor() { }

  public getNextByEntity(): Set<Entrenamiento>{
    let entrenamientos = new Set<Entrenamiento>;
    for(let entrenamiento of ENTRENAMIENTOS){
      entrenamientos.add(entrenamiento);
    }
    return entrenamientos;
  }

  public getFinishedByEntity(): Set<Entrenamiento>{
    let entrenamientos = new Set<Entrenamiento>;
    for(let entrenamiento of ENTRENAMIENTOS_FINALIZADOS){
      entrenamientos.add(entrenamiento);
    }
    return entrenamientos;
  }
}
