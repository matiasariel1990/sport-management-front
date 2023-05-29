import { Component, OnInit } from '@angular/core';
import { Jugador } from '../equipo/equipo.component';

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


const JUGADORES: Jugador[] = [
  {id: 1, name: 'Owen Farrell', peso: 98, pos: 'Pilier', isIll: true},
  {id: 2, name: 'Maro Itoje', peso: 115, pos: 'Talón', isIll: false},
  {id: 3, name: 'Mako Vunipola', peso: 120, pos: 'Pilier', isIll: false},
  {id: 4, name: 'Alun Wyn Jones', peso: 110, pos: 'Segunda línea', isIll: true},
  {id: 5, name: 'Samuel Whitelock', peso: 116, pos: 'Segunda línea', isIll: false},
  {id: 6, name: 'Ardie Savea', peso: 105, pos: 'Tercera línea', isIll: false},
  {id: 7, name: 'Justin Tipuric', peso: 102, pos: 'Tercera línea', isIll: false},
  {id: 8, name: 'Kieran Read', peso: 108, pos: 'Octavo', isIll: false},
  {id: 9, name: 'Conor Murray', peso: 94, pos: 'Medio scrum', isIll: false},
  {id: 10, name: 'Johnny Sexton', peso: 92, pos: 'Apertura', isIll: false},
  {id: 11, name: 'George North', peso: 103, pos: 'Ala', isIll: false},
  {id: 12, name: 'Jonathan Davies', peso: 101, pos: 'Centro', isIll: false},
  {id: 13, name: 'Manu Tuilagi', peso: 117, pos: 'Centro', isIll: false},
  {id: 14, name: 'Cheslin Kolbe', peso: 81, pos: 'Ala', isIll: false},
  {id: 15, name: 'Stuart Hogg', peso: 95, pos: 'Zaguero', isIll: false}
];

@Component({
  selector: 'app-entrenamiento',
  templateUrl: './entrenamiento.component.html',
  styleUrls: ['./entrenamiento.component.css']
})

export class EntrenamientoComponent implements OnInit{
  
  titulo = "Entrenamiento";
  fecha = "07/02";
  hs = "16:00 hs";
  equiposSeleccionados = new Set<Equipo>();
  jugadoresSeleccionados = new Set<Jugador>();
  
  equiposDelEvento = new Set<Equipo>();
  jugadoresDelEvento = new Set<Jugador>();
  jugadoresPresentes = new Set<Jugador>();

  manageSectionEquipo: boolean;
  manageSectionJugadores: boolean;
  manageSectionPasarLista: boolean;
  todosPresentes: boolean;

  enFecha: boolean;

  constructor(){
    this.manageSectionEquipo = false;
    this.manageSectionJugadores = false;
    this.manageSectionPasarLista = false;
    this.enFecha = false;
    this.todosPresentes = false;

    /*MOCKEO PARA TRABAJAR CON PASAR LISTA. ELIMINAR DESPUES*/
    for(let jug of JUGADORES){
      this.jugadoresDelEvento.add(jug);
    }
  }

  equiposHabilitados = EQUIPOS;
  jugadoresHablitados = JUGADORES;
  
  ngOnInit(): void {
    
  }

  cambiarCumplirFecha(){
    this.enFecha = !this.enFecha;
  }
  
  deshabilitarTodo(){
    this.manageSectionEquipo = false;
    this.manageSectionJugadores = false;
    this.manageSectionPasarLista = false;
  }

  habilitarEquipos(): void{
    if(this.manageSectionEquipo){
      this.deshabilitarTodo();
    }else{
      this.deshabilitarTodo();
      this.manageSectionEquipo = true;
    }
  }

  habilitarJugadores():void{
    if(this.manageSectionJugadores){
      this.deshabilitarTodo();
    }else{
      this.deshabilitarTodo();
      this.manageSectionJugadores = true;
    }
  }

  habilitarPasarLista(){
    if(this.manageSectionPasarLista){
      this.deshabilitarTodo();
    }else{
      this.deshabilitarTodo();
      this.manageSectionPasarLista = true;
    }
  }

  listaEquiposEstilo(){
    return {'hide' : !this.manageSectionEquipo};
  }

  listaJugadoresEstilo(){
    return {'hide' : !this.manageSectionJugadores};
  }

  listaJugadoresPasarLista(){
    return {'hide' : !this.manageSectionPasarLista};
  }

  todosPresentesChanged(): void{
    if(!this.todosPresentes){
      for(let jug of this.jugadoresDelEvento){
        if(!jug.isIll){
          this.jugadoresPresentes.add(jug);
        }
      }
      this.todosPresentes = true;
    }else{
      this.jugadoresPresentes = new Set<Jugador>();
      this.todosPresentes = false;
    }
  }

  invertirSeleccion(){
    for(let jug of this.jugadoresDelEvento){
        this.darPresent(jug);
    }
  }

  seleccionar(equipo : Equipo){
    if(!this.equiposSeleccionados.delete(equipo)){
      this.equiposSeleccionados.add(equipo);
    }
  }

  seleccionarJug(jugador : Jugador){
    if(!this.jugadoresSeleccionados.delete(jugador)){
      this.jugadoresSeleccionados.add(jugador);
    }
  }

  darPresent(jugador : Jugador){
    if(!this.jugadoresPresentes.delete(jugador)){
      if(!jugador.isIll){
        this.jugadoresPresentes.add(jugador);
      }
    }else{
      this.todosPresentes = false;
    }
  }

  equipoadd(equipo:Equipo){
    return {'list-item': true, 'list-item:hover' : true,
    'list-item-add' : this.equiposSeleccionados.has(equipo)}; 
  }

  jugadoradd(jugador:Jugador){
    return {'list-item': true, 'list-item:hover' : true,
    'list-item-add' : this.jugadoresSeleccionados.has(jugador)}; 
  }

  jugadorPresent(jugador:Jugador){
    if(this.todosPresentes){
      return {'list-item': true, 'list-item:hover' : true,
      'disable': jugador.isIll, 
      'list-item-add' : !jugador.isIll}; 
    }
    return {'list-item': true, 'list-item:hover' : true,
    'disable': jugador.isIll, 
    'list-item-add' : this.jugadoresPresentes.has(jugador)}; 
  }

  agregarEquipos(){
    this.equiposDelEvento = new Set<Equipo>();
    for(let eq of this.equiposSeleccionados){
      this.equiposDelEvento.add(eq);
    }
  }

  agregarJugadores(){
    //agregar Jugadores -> despues vemos
    this.jugadoresDelEvento = new Set<Jugador>();
    for(let jug of this.jugadoresSeleccionados){
      this.jugadoresDelEvento.add(jug);
    }
  }

  
  tieneEquipos(): boolean{
    return this.equiposDelEvento.size > 0;
  }

  finalizadoClass(){
    return {'btn-post-evento': true, 
    'hide' : !this.enFecha,
    }
  }


  
}
