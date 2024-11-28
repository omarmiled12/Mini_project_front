import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Marque } from '../model/marque.model';


@Component({
  selector: 'app-update-marque',
  templateUrl: './updat-marque.component.html',
  styles: []
})
export class UpdateMarqueComponent {
  @Input() marque!: Marque;
  @Input() ajout!: boolean;
  @Output() marqueUpdated = new EventEmitter<Marque>();

  saveMarque() {
    this.marqueUpdated.emit(this.marque);
  }
}