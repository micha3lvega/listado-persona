import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { CodeHighlighterModule } from 'primeng/codehighlighter';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioPersonaComponent } from './formulario-persona/formulario-persona.component';

@NgModule({
  declarations: [AppComponent, FormularioPersonaComponent],
  imports: [
    ToastModule,
    ButtonModule,
    FormsModule,
    CommonModule,
    DialogModule,
    BrowserModule,
    TabViewModule,
    InputTextModule,
    CodeHighlighterModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
