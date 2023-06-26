import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaEquiposComponent } from './lista-equipos/lista-equipos.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
/*
const routes : Routes = [
  {path: '', component: HomeComponent},
  {path: 'entrenamientos', component: EntrenamientoComponent},
  {path: 'equipos', component: EquipoComponent},
  {path: 'jugadores', component: JugadorComponent},
];
*/

@NgModule({
  declarations: [
    AppComponent,
    ListaEquiposComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
