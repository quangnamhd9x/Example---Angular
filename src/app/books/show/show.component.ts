import {Component, OnInit} from '@angular/core';
import {BookServicesService} from '../../book-services.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Ibook} from '../../ibook';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  book: Ibook;

  constructor(private bookServicesService: BookServicesService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  id = +this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.bookServicesService.getBookId(this.id).subscribe(data => {
      this.book = data;
    });
  }
  list(){
    this.router.navigate(['books']);
  }

}
