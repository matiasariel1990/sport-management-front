import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  menuActivado:boolean = false;


  activarMenu(){
    this.menuActivado = !this.menuActivado;
  }

  clasesMenu(){
    return {
      'hide' : !this.menuActivado
    }
  }

}
