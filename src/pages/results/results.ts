import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpEvent, HttpEventType } from '@angular/common/http';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable'
;
import { SearchProvider } from '../../providers/search/search';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, private searchProvider: SearchProvider) {
 
    this.resultList = [];
  }

  ngOnInit(){
    this.buildList();
  }

  buildList(){
    // let url = "build/dummydata.json";
    // let data: Observable<any> = this.http.get(url)
    // data.subscribe(result =>{
    //   this.resultList = result;
    //   console.log(result);
    // })

    this.searchProvider.getData().subscribe((event: HttpEvent<any>) =>{
      switch (event.type) {
        case HttpEventType.Sent:
        console.log('Request sent!');
        break;

        case HttpEventType.ResponseHeader:
        console.log('Response Header Received!');
        break;

        case HttpEventType.DownloadProgress:
        const kbLoaded = Math.round(event.loaded / 1024);
        console.log(`Download in progress! ${kbLoaded}KB loaded`);
        break;

        case HttpEventType.Response:
        console.log('Response Receive!!!');
        this.resultList = event.body;
      }
    })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

}
