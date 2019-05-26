import { PuertasComponent } from './../../puertas/puertas.component';
import { Routes } from '@angular/router';
import { InicioComponent } from 'src/app/inicio/inicio.component';
import { SalasComponent } from 'src/app/salas/salas.component';
import { UsuarioComponent } from 'src/app/usuario/usuario.component';

export const appRoutes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'salas', component: SalasComponent },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'puertas', component: PuertasComponent },
  {
    path: '',
    redirectTo: '/inicio',
    pathMatch: 'full'
  },
  // { path: '**', component: PageNotFoundComponent }
];
