import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { HomeService } from './home.service';
import { Todo } from './../../../../../libs/api-interfaces/src/lib/todo';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';



@Component({
  selector: 'full-stack-todos-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

 
  constructor(
    private readonly homeService: HomeService,
    private readonly fb: FormBuilder,
  ) { }
  public $todos: Todo[] = [];
  public todoForm: FormGroup;


  ngOnInit() {
    this.getTodos();
    this.setForm();

   


  }

  ///////////////////////////////////////////////////////////////////
  // Form
  ///////////////////////////////////////////////////////////////////
  setForm() {
    this.todoForm = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      description: ['', Validators.required],
      active: [true]
    });

  }

  





  ///////////////////////////////////////////////////////////////////
  // Métodos CRUD
  ///////////////////////////////////////////////////////////////////

  getTodos() {
    return this.homeService.getTodos()  
      .subscribe(data => {
        this.$todos = data;
        console.log('from cmp',this.$todos);
      })
  }

  addTodo(todo) {
    return this.homeService.addTodo(todo.value)
    .subscribe((res: any) => {
              console.log('res do cmp', res);
            }, (err: any) => {
              console.log(err);
            });
  }

  // do DJAM
  // add
  // onFormSubmit() {
  //   this.isLoadingResults = true;
  //   this.api.addArticle(this.articleForm.value)
  //     .subscribe((res: any) => {
  //         const id = res._id;
  //         this.isLoadingResults = false;
  //         this.router.navigate(['/show-article', id]);
  //       }, (err: any) => {
  //         console.log(err);
  //         this.isLoadingResults = false;
  //       });
  // }


  // getArticleDetails(id: any) {
  //   this.api.getArticle(id)
  //     .subscribe((data: any) => {
  //       this.article = data;
  //       console.log(this.article);
  //       this.isLoadingResults = false;
  //     });
  // }

  //
  // getArticle(id: any) {
  //   this.api.getArticle(id).subscribe((data: any) => {
  //     this._id = data._id;
  //     this.articleForm.setValue({
  //       title: data.title,
  //       author: data.author,
  //       description: data.description,
  //       content: data.content
  //     });
  //   });
  // }

  // deleteArticle(id: any) {
  //   this.isLoadingResults = true;
  //   this.api.deleteArticle(id)
  //     .subscribe(res => {
  //         this.isLoadingResults = false;
  //         this.router.navigate(['/articles']);
  //       }, (err) => {
  //         console.log(err);
  //         this.isLoadingResults = false;
  //       }
  //     );
  // }

  // update
  // onFormSubmit() {
  //   this.isLoadingResults = true;
  //   this.api.updateArticle(this._id, this.articleForm.value)
  //     .subscribe((res: any) => {
  //         const id = res._id;
  //         this.isLoadingResults = false;
  //         this.router.navigate(['/show-article', id]);
  //       }, (err: any) => {
  //         console.log(err);
  //         this.isLoadingResults = false;
  //       }
  //     );
  // }

  // update btn
  // articleDetails() {
  //   this.router.navigate(['/show-article', this._id]);
  // }



}
