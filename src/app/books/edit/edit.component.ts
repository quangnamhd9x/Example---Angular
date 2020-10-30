import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookServicesService} from '../../book-services.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Ibook} from '../../ibook';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editForm: FormGroup;
  book: Ibook;
  constructor(private fb: FormBuilder,
              private bookServicesService: BookServicesService,
              private router: Router,
              private route: ActivatedRoute) {
  }

  id = +this.route.snapshot.paramMap.get('id');

  ngOnInit(): void {
    this.editForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.bookServicesService.getBookId(this.id).subscribe(data => {
      this.book = data;
      this.editForm.patchValue(this.book);
    });
  }

  editSubmit() {
    const book = this.editForm.value;
    this.bookServicesService.updateBook(book, this.id).subscribe(res => {
      this.router.navigate(['books']);
    });
  }
  list(){
    this.router.navigate(['books']);
  }

  get title(){
    return this.editForm.get('title');
  }
  get author(){
    return this.editForm.get('author');
  }
  get description(){
    return this.editForm.get('description');
  }


}
