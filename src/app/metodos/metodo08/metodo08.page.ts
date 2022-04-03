import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-metodo08',
  templateUrl: './metodo08.page.html',
  styleUrls: ['./metodo08.page.scss'],
})
export class Metodo08Page implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  showTab1(){
    this.navCtrl.navigateForward('');
  }

}
