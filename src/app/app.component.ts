import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { MessageService } from 'primeng/api';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService],
})
export class AppComponent {
  title: string = 'Listado de personas';

  name: string;
  invalidaName: boolean = false;

  lastName: string;
  invalidaLastName: boolean = false;

  display = false;

  personas: Persona[];

  constructor(private messageService: MessageService) {
    this.personas = [new Persona('Ana', 'Melo'), new Persona('Juan', 'Perez')];
  }

  showDialog() {
    this.display = true;
  }

  hideDialog() {
    this.display = false;
  }

  onSubmit() {
    var regex = /^[A-Za-z]+$/;

    let valid = true;

    if (!this.name || this.name.length < 3 || !this.name.match(regex)) {
      this.invalidaName = true;
      valid = false;
    } else {
      this.invalidaName = false;
    }

    if (
      !this.lastName ||
      this.lastName.length < 3 ||
      !this.lastName.match(regex)
    ) {
      this.invalidaLastName = true;
      valid = false;
    } else {
      this.invalidaLastName = false;
    }

    if (valid) {
      this.personas.push(new Persona(this.name, this.lastName));
      this.showOKMsj();
      this.clearForm();
    }
  }

  clearForm() {
    this.display = false;
    this.name = null;
    this.lastName = null;
  }

  showOKMsj() {
    this.messageService.add({
      key: 'custom',
      severity: 'info',
      summary: 'Genial',
      detail: 'Persona creada con exito',
    });
  }
}
