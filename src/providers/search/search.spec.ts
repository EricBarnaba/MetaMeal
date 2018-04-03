import { TestBed, inject } from '@angular/core/testing';
import { HttpEvent, HttpEventType, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SearchProvider } from './search';

import { request } from 'http';

describe('The SearchProvider\'s', () => {
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [SearchProvider]
        })
    })
    describe('buildList method', () =>{
        it('should build a list of restaurants', inject([HttpTestingController, SearchProvider], 
            (httpMock: HttpTestingController, searchProvider: SearchProvider) => {
                const mockRestaurants = [
                    {name: 'PostBellum', rating: '99'},
                    {name: 'The Belle & James', rating: '97'}
                ];
                searchProvider.getData().subscribe((event: HttpEvent<any>) => {
                    switch (event.type) {
                        case HttpEventType.Response:
                        expect(event.body).toEqual(mockRestaurants);
                    }
                })
    
                const mockReq = httpMock.expectOne(searchProvider.getUrl);
                    expect (mockReq.cancelled).toBeFalsy();
                    expect(mockReq.request.responseType).toEqual('json');
                    expect(mockReq.request.method).toBe('GET');
                mockReq.flush(mockRestaurants);
                httpMock.verify();
    
        })
        )
    })
    describe('postSearch method', () => {
        it('should POST a JSON representation of a search to the server', inject([HttpTestingController, SearchProvider], 
            (httpMock: HttpTestingController, searchProvider: SearchProvider) => {
                searchProvider.postSearch('Wilmington', 'Neo-American', 99).subscribe((data: any) => {
                    expect(data.location).toBe('Wilmington');
                    expect(data.cuisine).toBe('Neo-American');
                    expect(data.radius).toBe(99);
                })
    
                const mockReq = httpMock.expectOne(searchProvider.postUrl);
                    expect (mockReq.cancelled).toBeFalsy();
                    expect(mockReq.request.method).toBe('POST');
                    expect(mockReq.request.url).toBe('https://jsonplaceholder.typicode.com/search');
                    
                mockReq.flush({location:'Wilmington',cuisine:'Neo-American',radius:99});
                httpMock.verify();
    
        })
        )
    })
})
