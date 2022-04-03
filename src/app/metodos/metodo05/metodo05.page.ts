import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-metodo05',
  templateUrl: './metodo05.page.html',
  styleUrls: ['./metodo05.page.scss'],
})
export class Metodo05Page implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  showTab1(){
    this.navCtrl.navigateForward('');
  }
}
