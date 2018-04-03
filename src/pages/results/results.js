var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpEventType } from '@angular/common/http';
import { SearchProvider } from '../../providers/search/search';
/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResultsPage = /** @class */ (function () {
    function ResultsPage(navCtrl, navParams, searchProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.searchProvider = searchProvider;
        this.resultList = [];
    }
    ResultsPage.prototype.ngOnInit = function () {
        this.buildList();
    };
    ResultsPage.prototype.buildList = function () {
        // let url = "build/dummydata.json";
        // let data: Observable<any> = this.http.get(url)
        // data.subscribe(result =>{
        //   this.resultList = result;
        //   console.log(result);
        // })
        var _this = this;
        this.searchProvider.getData().subscribe(function (event) {
            switch (event.type) {
                case HttpEventType.Sent:
                    console.log('Request sent!');
                    break;
                case HttpEventType.ResponseHeader:
                    console.log('Response Header Received!');
                    break;
                case HttpEventType.DownloadProgress:
                    var kbLoaded = Math.round(event.loaded / 1024);
                    console.log("Download in progress! " + kbLoaded + "KB loaded");
                    break;
                case HttpEventType.Response:
                    console.log('Response Receive!!!');
                    _this.resultList = event.body;
            }
        });
    };
    ResultsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResultsPage');
    };
    ResultsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-results',
            templateUrl: 'results.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, SearchProvider])
    ], ResultsPage);
    return ResultsPage;
}());
export { ResultsPage };
//# sourceMappingURL=results.js.map