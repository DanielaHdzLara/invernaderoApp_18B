import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {HomePage} from "../../../../prueba/src/pages/home/home";
import {HomePage} from "../home/home";
import {Http} from "@angular/http";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  home = HomePage;
  usuario = '';
  password = '';

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public http: Http) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  clickHome(){
    console.log("clickHome");
    console.log(this.usuario);
    console.log(this.password);

    //url que da el hello world, lo tine que autocompletar solo, error atras de la flechita va subrayado
    this.http.get('/home/')
      .suscribe(  next: data => {
        console.log(data.text());
      }, error:error =>{
        console.log("error");
      }
    );

    //this.navCtrl.push(this.home);
    //this.navCtrl.setRoot(this.home);

  }

}
