import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Equipo, EquipoService } from '../servicios/equipo.service';

@Component({
  selector: 'app-lista-equipos',
  templateUrl: './lista-equipos.component.html',
  styleUrls: ['./lista-equipos.component.css']
})

export class ListaEquiposComponent implements OnInit{

  equipoService : EquipoService;

  equiposHabilitados? : Set<Equipo>;
  equiposSeleccionados = new Set<Equipo>;

  @Output()
  onUpdateEquiposEvent = new EventEmitter<String>();

  constructor(private equipoServiceArg : EquipoService){
    this.equipoService = equipoServiceArg;
    this.equiposHabilitados = this.equipoService.getEquiposSeleccionables();
    this.equiposSeleccionados = this.equipoService.getEquiposSeleccionados();
  }

  ngOnInit(): void {
    
  }

  seleccionar(equipo : Equipo){
    if(!this.equiposSeleccionados.delete(equipo)){
      this.equiposSeleccionados.add(equipo);
    }
  }

  equipoadd(equipo : Equipo){
    return {'list-item': true, 'list-item:hover' : true,
      'list-item-add' : this.equiposSeleccionados.has(equipo)}; 
  }

  agregarEquipos(){
    this.equipoService.updateEquiposEntrenamiento(this.equiposSeleccionados);
    this.onUpdateEquiposEvent.emit("Hola");
    console.log("Se Emitio");
  }
}
