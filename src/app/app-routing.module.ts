import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiposanimalComponent } from './vistas/tiposanimal/tiposanimal.component';
import { AnimalesComponent } from './vistas/animales/animales.component';

const routes: Routes = [
  { path:'tiposanimal', component:TiposanimalComponent},
  { path:'animales', component:AnimalesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
