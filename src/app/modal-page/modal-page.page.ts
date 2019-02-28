import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-modal-page',
  templateUrl: './modal-page.page.html',
  styleUrls: ['./modal-page.page.scss'],
})
export class ModalPagePage  {

  title: string = ""
  content: string = ""


  constructor(
    public modalCtrl: ModalController
  ) {
  

   }

  dismiss() {
    this.modalCtrl.dismiss();
    console.log('exited modal')
  }

  saveNote() {
    console.log(`title: ${this.title} content: ${this.content}`)
  }
  

}
