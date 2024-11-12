import { TestBed, waitForAsync , inject } from '@angular/core/testing';
import { BookService } from './book.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Book', () => {
 beforeEach(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientTestingModule],
     providers: [BookService]
   });
 });

 it('should ...', inject([BookService], (service: BookService) => {
   expect(service).toBeTruthy();
 }));
});