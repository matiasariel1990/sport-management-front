import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquipoComponent } from './equipo/equipo.component';
import { EntrenamientoComponent } from './entrenamiento/entrenamiento.component';
import { HomeComponent } from './home/home.component';
import { JugadorComponent } from './jugador/jugador.component';

const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'entrenamientos', component: EntrenamientoComponent},
  {path: 'equipos', component: EquipoComponent},
  {path: 'jugadores', component: JugadorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
