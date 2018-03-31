import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'
;
/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {

  resultList: any; 

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
 
    this.resultList = [];
  }

  ngOnInit(){
    this.getData();
  }

  getData(){
    let url = "build/dummydata.json";
    let data: Observable<any> = this.http.get(url)
    data.subscribe(result =>{
      this.resultList = result;
      console.log(result);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

}
