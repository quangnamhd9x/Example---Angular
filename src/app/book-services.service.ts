import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Ibook} from './ibook';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {
  private readonly URL = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {
  }

  getAllBook(): Observable<Ibook[]> {
    return this.http.get<Ibook[]>(this.URL);
  }

  addBook(book: Partial<Ibook>): Observable<Ibook> {
    return this.http.post<Ibook>(this.URL, book);
  }

  deleteBook(id: number): Observable<any> {
    return this.http.delete(this.URL + '/' + id);
  }
  updateBook(book: Ibook, id: number): Observable<Ibook>{
    return this.http.put<Ibook>(this.URL + '/' + id, book);
  }
  getBookId(id: number): Observable<Ibook>{
    return this.http.get<Ibook>(this.URL + '/' + id);
  }
}


