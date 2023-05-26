import { Component, OnInit } from '@angular/core';

export interface Jugador {
  name: string;
  id: number;
  peso: number;
  pos: string;
}

const JUGADORES: Jugador[] = [
  {id: 1, name: 'Owen Farrell', peso: 98, pos: 'Pilier'},
  {id: 2, name: 'Maro Itoje', peso: 115, pos: 'Talón'},
  {id: 3, name: 'Mako Vunipola', peso: 120, pos: 'Pilier'},
  {id: 4, name: 'Alun Wyn Jones', peso: 110, pos: 'Segunda línea'},
  {id: 5, name: 'Samuel Whitelock', peso: 116, pos: 'Segunda línea'},
  {id: 6, name: 'Ardie Savea', peso: 105, pos: 'Tercera línea'},
  {id: 7, name: 'Justin Tipuric', peso: 102, pos: 'Tercera línea'},
  {id: 8, name: 'Kieran Read', peso: 108, pos: 'Octavo'},
  {id: 9, name: 'Conor Murray', peso: 94, pos: 'Medio scrum'},
  {id: 10, name: 'Johnny Sexton', peso: 92, pos: 'Apertura'},
  {id: 11, name: 'George North', peso: 103, pos: 'Ala'},
  {id: 12, name: 'Jonathan Davies', peso: 101, pos: 'Centro'},
  {id: 13, name: 'Manu Tuilagi', peso: 117, pos: 'Centro'},
  {id: 14, name: 'Cheslin Kolbe', peso: 81, pos: 'Ala'},
  {id: 15, name: 'Stuart Hogg', peso: 95, pos: 'Zaguero'}
];



@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})



export class EquipoComponent implements OnInit{
 
  displayedColumns: string[] = ['id', 'name', 'peso', 'pos'];
  dataSource = JUGADORES;
  clickedRows: any;

  ngOnInit(): void {
    this.clickedRows = new Set<Jugador>();
  }

  itemselected(jugador: Jugador): void{
    debugger;
    if(this.clickedRows.has(jugador)){
      this.clickedRows.delete(jugador);
    }else{
      this.clickedRows.add(jugador);
    }
  }
}


