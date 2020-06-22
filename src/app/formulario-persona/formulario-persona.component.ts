import { Component, Output, EventEmitter } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css'],
  providers: [MessageService],
})
export class FormularioPersonaComponent {
  @Output() personaCreada = new EventEmitter<Persona>();

  name: string;
  invalidaName: boolean = false;

  lastName: string;
  invalidaLastName: boolean = false;
  display = false;

  constructor(private messageService: MessageService) {}

  addPerson() {
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
      this.personaCreada.emit(new Persona(this.name, this.lastName));
      this.showOKMsj();
      this.clearForm();
    }
  }

  showDialog() {
    this.display = true;
  }

  hideDialog() {
    this.display = false;
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
