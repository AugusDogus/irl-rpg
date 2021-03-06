import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LevelProvider } from "../../providers/level/level";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LevelProvider]
})

export class HomePage {

  public level;
  public xp;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    this.xp = this.generateXP(0, 37224);
    this.level = LevelProvider.get(this.xp);
  }

  generateXP(min,max)
  {
    return Math.floor(Math.random()*(max-min+1)+min);
  }

}
