import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EquipoComponent } from './equipo/equipo.component';
import {MatTableModule} from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EntrenamientoComponent } from './entrenamiento/entrenamiento.component';
import { IonicModule } from '@ionic/angular';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { JugadorComponent } from './jugador/jugador.component';

import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'entrenamientos', component: EntrenamientoComponent},
  {path: 'equipos', component: EquipoComponent},
  {path: 'jugadores', component: JugadorComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    EquipoComponent,
    EntrenamientoComponent,
    ListaEquiposComponent,
    NavBarComponent,
    HomeComponent,
    JugadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
