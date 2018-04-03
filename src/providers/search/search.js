var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the SearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SearchProvider = /** @class */ (function () {
    function SearchProvider(http) {
        this.http = http;
        this.getUrl = 'https://jsonplaceholder.typicode.com/restaurants';
        this.postUrl = 'https://jsonplaceholder.typicode.com/search';
    }
    SearchProvider_1 = SearchProvider;
    SearchProvider.prototype.getData = function () {
        var req = new HttpRequest('GET', this.getUrl, {
            reportProgress: true
        });
        return this.http.request(req);
    };
    SearchProvider.prototype.postSearch = function (location, cuisine, radius) {
        var id = SearchProvider_1.lastSearch;
        SearchProvider_1.lastSearch++;
        return this.http.post(this.postUrl, { id: id, location: location, cuisine: cuisine, radius: radius });
    };
    SearchProvider.prototype.updateSearch = function (id, location, cuisine, radius) {
        return this.http.put(this.postUrl, { id: id, location: location, cuisine: cuisine, radius: radius });
    };
    SearchProvider = SearchProvider_1 = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], SearchProvider);
    return SearchProvider;
    var SearchProvider_1;
}());
export { SearchProvider };
//# sourceMappingURL=search.js.map