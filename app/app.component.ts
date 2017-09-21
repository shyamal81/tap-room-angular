import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector : 'app-root',
  template: `
  <div class="container">
    <h1>TapRoom</h1>
    <keg-list [childKegList]="masterKegList" (clickSender)="editKeg($event)"></keg-list>
    <hr>
    <edit-keg [childSelectedKeg]="selectedKeg" (editDoneButtonClickedSender)="doneEditing()"> </edit-keg>
    <new-keg (newKegSender)="addKeg($event)"> </new-keg>
  </div>
  `
})

export class AppComponent {
  masterKegList: Keg[] = [
    new Keg('Mcmenamins', 'Beware The Kludde', 6.5, 7.4),
    new Keg('Grape Yard', 'Concordia Brewers', 8, 7),
    new Keg('Fresh Wineries', 'Bobcat Pale', 9, 5)
  ];
  selectedKeg = null;

  editKeg(clickedKeg ){
    this.selectedKeg = clickedKeg;
  }

  doneEditing(){
    this.selectedKeg = null;
  }
}
