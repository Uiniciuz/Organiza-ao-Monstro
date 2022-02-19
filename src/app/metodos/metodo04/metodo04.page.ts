import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-metodo04',
  templateUrl: './metodo04.page.html',
  styleUrls: ['./metodo04.page.scss'],
})
export class Metodo04Page implements OnInit {
  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  showTab1(){
    this.navCtrl.navigateForward('');
  }

}
