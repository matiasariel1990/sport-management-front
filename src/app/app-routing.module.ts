import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquipoComponent } from './equipo/equipo.component';
import { EntrenamientoComponent } from './entrenamiento/entrenamiento.component';
import { HomeComponent } from './home/home.component';
import { JugadorComponent } from './jugador/jugador.component';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { MatTableModule } from '@angular/material/table';



const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'entrenamientos', component: EntrenamientoComponent},
  {path: 'equipos', component: EquipoComponent},
  {path: 'jugadores', component: JugadorComponent},
];

@NgModule({
  declarations: [
    EquipoComponent,
    EntrenamientoComponent,
    HomeComponent,
    JugadorComponent
  ],
  imports: [
    CommonModule, 
    MatTableModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes)],
  exports: [
    RouterModule,
    IonicModule
  ]
})
export class AppRoutingModule { }
