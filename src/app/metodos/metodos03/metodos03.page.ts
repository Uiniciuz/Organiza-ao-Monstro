import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-metodos03',
  templateUrl: './metodos03.page.html',
  styleUrls: ['./metodos03.page.scss'],
})
export class Metodos03Page implements OnInit {
  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  showTab1(){
    this.navCtrl.navigateForward('');
  }

}
