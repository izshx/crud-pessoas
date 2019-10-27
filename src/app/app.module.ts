import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ListaPessoaComponent } from './lista-pessoa/lista-pessoa.component';
import { PessoaService } from './pessoa.service';
import { CadPessoaComponent } from './cad-pessoa/cad-pessoa.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ListaPessoaComponent,
    CadPessoaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    PessoaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
