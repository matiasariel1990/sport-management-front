import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sport-management-front';
  seleccion: boolean[] = [
    false,
    false,
    false,
    false,
    false
  ]
  
  seleccionar(nuevaSeleccion : number){
    this.seleccion[0] = false;
    this.seleccion[1] = false;
    this.seleccion[2] = false;
    this.seleccion[3] = false;
    this.seleccion[4] = false;
    this.seleccion[nuevaSeleccion - 1] = true;
  }

  seleccionado(seleccion : number):boolean{
    var result : boolean; 
    result = this.seleccion[seleccion -1]
    debugger;
    return result;
  }
  

}
