import { Component } from '@angular/core';
import { Entrenamiento, EntrenamientoService } from './servicios/entrenamiento.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sport-management-front';
  entrenamientos = new Set<Entrenamiento>;
  
  
  constructor(private entrenamientoSetvice : EntrenamientoService){
    for(let entrenamiento of entrenamientoSetvice.getFinishedByEntity()){
      this.entrenamientos.add(entrenamiento);
    }
    for(let entrenamiento of entrenamientoSetvice.getNextByEntity()){
      this.entrenamientos.add(entrenamiento);
    }
  }

  seleccionar(nuevaSeleccion : number){
    
  }

  seleccionado():boolean{
    return true;
  }
  

}
