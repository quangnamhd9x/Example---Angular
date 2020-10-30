import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BookServicesService} from '../../book-services.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  addForm: FormGroup;
  constructor(private fb: FormBuilder,
              private bookServicesService: BookServicesService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.addForm = this.fb.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      description: ['', Validators.required]
    });
  }
  addSubmit(){
    const book = this.addForm.value;
    this.bookServicesService.addBook(book).subscribe(data => {
      this.router.navigate(['books']);
    });
  }
  list(){
    this.router.navigate(['books']);
  }

  get title(){
    return this.addForm.get('title');
  }

  get author(){
    return this.addForm.get('author');
  }

  get description(){
    return this.addForm.get('description');
  }



}
