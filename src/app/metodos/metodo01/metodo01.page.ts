import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-metodo01',
  templateUrl: './metodo01.page.html',
  styleUrls: ['./metodo01.page.scss'],
})
export class Metodo01Page implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  showTab1(){
    this.navCtrl.navigateForward('');
  }

}
