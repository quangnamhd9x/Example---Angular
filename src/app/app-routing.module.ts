import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListComponent} from './books/list/list.component';
import {AddComponent} from './books/add/add.component';
import {EditComponent} from './books/edit/edit.component';
import {ShowComponent} from './books/show/show.component';

const routes: Routes = [
  {path: '', redirectTo: 'books', pathMatch: 'full'},
  {path: 'books', component: ListComponent},
  {path: 'books/create', component: AddComponent},
  {path: 'books/:id', component: EditComponent},
  {path: 'books/show/:id', component: ShowComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
