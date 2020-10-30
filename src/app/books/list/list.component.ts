import {Component, OnInit} from '@angular/core';
import {Ibook} from '../../ibook';
import {BookServicesService} from '../../book-services.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  listBook: Ibook[] = [];

  constructor(private bookServicesService: BookServicesService) {
  }

  ngOnInit(): void {
    this.getListBook();
  }

  getListBook() {
    this.bookServicesService.getAllBook().subscribe(data => {
      this.listBook = data;
    });
  }
  deleteBook(index){
    const book = this.listBook[index];
    if (confirm('Are you sure')){
      this.bookServicesService.deleteBook(book.id).subscribe(() => {
        this.getListBook();
      });
    }
  }

}
