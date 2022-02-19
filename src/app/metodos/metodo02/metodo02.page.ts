import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-metodo02',
  templateUrl: './metodo02.page.html',
  styleUrls: ['./metodo02.page.scss'],
})
export class Metodo02Page implements OnInit {
  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  showTab1(){
    this.navCtrl.navigateForward('');
  }

}
