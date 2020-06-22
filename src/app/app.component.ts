import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Listado de personas';
  personas = [new Persona('Ana', 'Melo'), new Persona('Juan', 'Perez')];

  addPerson(persona: Persona) {
    this.personas.push(persona);
  }
}
