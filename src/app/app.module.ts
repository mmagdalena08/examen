import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalesComponent } from './vistas/animales/animales.component';
import { TiposanimalComponent } from './vistas/tiposanimal/tiposanimal.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalesComponent,
    TiposanimalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
